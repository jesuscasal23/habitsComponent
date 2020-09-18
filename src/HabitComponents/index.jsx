/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import CreateIcon from "@material-ui/icons/Create";
import Typography from "@material-ui/core/Typography";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import Chip from "@material-ui/core/Chip";
import { Box } from "@material-ui/core";
import HabitWeek from "./components/HabitWeek";
import Data from "../service/habitsData";

function Habits({ id }) {
  return (
    <Box
      css={css`
        width: 90%;
        margin: 0 auto;
        background-color: #6bd0ef;
        opacity: 0.9;
        position: relative;
        margin-top: 20px;
        border-radius: 20px;
        min-width: 700px;
        -webkit-box-shadow: 9px 21px 54px 32px rgba(169, 222, 238, 1);
        -moz-box-shadow: 9px 21px 54px 32px rgba(169, 222, 238, 1);
        box-shadow: 9px 21px 54px 32px rgba(169, 222, 238, 1);
      `}
    >
      <Typography
        variant="h5"
        css={css`
          font-size: 1rem;
          line-height: 1rem;
          mix-blend-mode: darken;
          margin-bottom: 8px;
          margin-left: 12px;
          font-weight: 600;
          padding: 10px;
        `}
      >
        {Data[id].name}
      </Typography>
      <CreateIcon
        css={css`
          position: absolute;
          top: 1.6rem;
          right: 1.6rem;
        `}
      />

      <div
        css={css`
          display: flex;
        `}
      >
        <Chip
          size="small"
          label="Fixed"
          color="primary"
          variant="outlined"
          css={css`
            font-size: 14px;
            line-height: 17px;
            padding: 0 10px;
            margin: 0 10px;
            border: 1px solid #115da5;
          `}
        />
        <Chip
          size="small"
          icon={<WhatshotIcon />}
          label="streak"
          color="primary"
          css={css`
            font-size: 14px;
            line-height: 17px;
            margin-bottom: 12px;
            background: #115da5;
            margin: 0 10px;
          `}
        />
        <Chip
          size="small"
          icon={<WhatshotIcon />}
          label="streak"
          color="primary"
          css={css`
            font-size: 14px;
            line-height: 17px;
            background: #115da5;
            margin: 0 10px;
            margin-bottom: 30px;
          `}
        />
      </div>

      <div>
        <HabitWeek id={id} />
      </div>
      <Typography
        variant="h5"
        css={css`
          font-size: 12px;
          line-height: 20px;
          mix-blend-mode: darken;
          padding: 10px;
        `}
      >
        Month
      </Typography>
    </Box>
  );
}

export default Habits;
