import React, { useState, useEffect, useContext, createContext } from "react";
import mockedHabits from "./habitsData";

const HabitsStateContext = createContext();
const HabitsSetStateContext = createContext();

export default function HabitsProvider({ children }) {
  const [habits, setHabits] = useState({});

  const loadHabits = () => {
    return Promise.resolve({ ...mockedHabits });
  };

  const createHabitEntry = (next, date, id) => {
    const habitsCopy = { ...habits };
    const newEntry = { timestamp: date, next };
    habitsCopy[id].progress.push(newEntry);
    setHabits(habitsCopy);
  };

  const changeHabitStatus = (id, status, date, next) => {
    // is there an entry for this date in the database? if yes
    const habitsCopy = { ...habits };
    const findEntry = habitsCopy[id].progress.findIndex(
      (obj) => obj.timestamp === date
    );
    if (findEntry > -1) {
      habitsCopy[id].progress[findEntry].status = next;
      setHabits(habitsCopy);
      // if there is no entry i create one
    } else {
      createHabitEntry(next, date, id);
      // here i call the function again so that the change become effective
      // otherwise the use would have to clikc twice once to create a entry
      // for that task in case that it does not exist and againto change
      // the existing task
      changeHabitStatus(id, status, date, next, id);
    }
  };

  useEffect(() => {
    loadHabits().then((res) => {
      setHabits(res);
    });
  }, []);

  return (
    <HabitsStateContext.Provider value={habits}>
      <HabitsSetStateContext.Provider value={{ setHabits, changeHabitStatus }}>
        {children}
      </HabitsSetStateContext.Provider>
    </HabitsStateContext.Provider>
  );
}

function useHabits() {
  const context = useContext(HabitsStateContext);
  if (context === undefined) {
    throw new Error("useHabits must be used within a HabitsStateContext");
  }
  return context;
}

function useSetHabits() {
  const context = useContext(HabitsSetStateContext);
  if (context === undefined) {
    throw new Error("useSetHabits must be used within a HabitsSetStateContext");
  }
  return context;
}

export { useHabits, useSetHabits };
