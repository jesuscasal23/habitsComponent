/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import moment from "moment";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { useHabits } from "../../../service/habits";
import HabitDay from "../HabitDay";
import getInfoAboutHabitDay from "./service/createsHabitInfo";

function HabitWeek() {
  // replace for a loop ?
  const initialState = [
    moment().add(-5, "days").format("YYYY-MM-DD"),
    moment().add(-4, "days").format("YYYY-MM-DD"),
    moment().add(-3, "days").format("YYYY-MM-DD"),
    moment().add(-2, "days").format("YYYY-MM-DD"),
    moment().add(-1, "days").format("YYYY-MM-DD"),
    moment().format("YYYY-MM-DD"), // today
    moment().add(1, "days").format("YYYY-MM-DD"),
    moment().add(2, "days").format("YYYY-MM-DD"),
    moment().add(3, "days").format("YYYY-MM-DD"),
    moment().add(4, "days").format("YYYY-MM-DD"),
    moment().add(5, "days").format("YYYY-MM-DD"),
  ];

  const habitsData = useHabits();
  const [dates, setDates] = useState(initialState);
  if (Object.values(habitsData).length === 0) return null;

  return (
    <div
      css={css`
        display: flex;
        width: 100%;
      `}
    >
      <NavigateBeforeIcon
        css={css`
          flex-grow: 1;
          margin: auto auto;
        `}
      />
      {dates.map((date, i) => {
        const result = getInfoAboutHabitDay(date, habitsData);

        return (
          <div
            key={date}
            css={css`
              flex-grow: 1;
              margin: auto auto;
            `}
          >
            <HabitDay habitStatus={result} />
          </div>
        );
      })}
      <NavigateNextIcon
        css={css`
          flex-grow: 1;
          margin: auto auto;
        `}
      />
    </div>
  );
}

export default HabitWeek;
