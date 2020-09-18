import React from "react";
import Habits from "./HabitComponents";
import DataContextProvider from "./service/habitsprovider";

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <Habits id="1001" />
      </DataContextProvider>{" "}
    </div>
  );
}

export default App;
