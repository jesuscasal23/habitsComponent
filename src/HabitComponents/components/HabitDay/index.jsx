/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styling, { getCorrectHoverIcon } from "./service/statusstyles";

// context
import { useSetHabits } from "../../../service/habits";

function HabitDay({ habitStatus, id }) {
  const { changeHabitStatus } = useSetHabits();
  // habitStyling = setclickorder(habitStatus)
  const habitStyling = styling[habitStatus.status];
  const correctHoverIcon = getCorrectHoverIcon(habitStatus.changesinto);

  const changeStatusOfHabit = () => {
    if (habitStatus.tense !== "FUTURE")
      changeHabitStatus(
        id,
        habitStatus,
        habitStatus.taskdate,
        habitStatus.changesinto
      );
  };

  return (
    <div
      onClick={changeStatusOfHabit}
      css={css`
        position: relative;
        height: ${habitStatus.tense === "PRESENT" ? "5rem" : "3rem"};
        width: ${habitStatus.tense === "PRESENT" ? "5rem" : "3rem"};
        background-color: ${habitStyling.color};
        border-style: solid;
        border-width: 4px;
        border-color: ${habitStyling.border};
        border-radius: 50%;
        margin: auto auto;

        .icon {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          padding: 0;
          margin: 0;
          opacity: 0;
          border-radius: 50%;
          color: white;
          font-size: ${habitStatus.tense === "PRESENT" ? "5rem" : "2.5rem"};
        }

        &:hover {
          .icon {
            opacity: ${habitStatus.tense === "FUTURE" ? 0 : 1};
          }
        }
      `}
    >
      <p
        css={css`
          margin-top: -2.2rem;
          text-align: center;
          font-size: 1.2rem;
        `}
      >
        {habitStatus.dayoftheweek}
      </p>
      <p
        css={css`
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          padding: 0;
          margin: 0;
          color: ${habitStyling.text};
          font-size: ${habitStatus.current ? "16px" : "14px"};
          line-height: 20px;
          letter-spacing: 0.25px;
        `}
      >
        {habitStatus.taskdate.slice(8, 10)}
      </p>
      {habitStatus.tense === "future" ? null : correctHoverIcon}
    </div>
  );
}

export default HabitDay;
