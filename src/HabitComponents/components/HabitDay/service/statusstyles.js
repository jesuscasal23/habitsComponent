/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
// mini
import CheckIcon from "@material-ui/icons/Check";
// skipped
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
// failed
import CloseIcon from "@material-ui/icons/Close";
// required
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
// optional
import HelpIcon from "@material-ui/icons/Help";
// notrequired
import AirlineSeatIndividualSuiteIcon from "@material-ui/icons/AirlineSeatIndividualSuite";

const icons = {
  completedIcon: (
    <CheckCircleOutlineIcon
      className="icon"
      css={css`
        background-color: green;
        color: white;
      `}
    />
  ),
  miniIcon: (
    <CheckIcon
      className="icon"
      css={css`
        background-color: lightgreen;
        color: white;
      `}
    />
  ),
  skipedIcon: (
    <DoubleArrowIcon
      className="icon"
      css={css`
        background-color: blue;
        color: white;
      `}
    />
  ),
  failedIcon: (
    <CloseIcon
      className="icon"
      css={css`
        background-color: red;
        color: white;
      `}
    />
  ),
  requiredIcon: (
    <PriorityHighIcon
      className="icon"
      css={css`
        background-color: grey;
        color: white;
      `}
    />
  ),
  optionalIcon: (
    <HelpIcon
      className="icon"
      css={css`
        background-color: grey;
        color: white;
      `}
    />
  ),
  notRequiredIcon: (
    <AirlineSeatIndividualSuiteIcon
      className="icon"
      css={css`
        background-color: grey;
        color: white;
      `}
    />
  ),
};

export function getCorrectHoverIcon(desiredIcon) {
  if (desiredIcon === "COMPLETED") return icons.completedIcon;
  if (desiredIcon === "MINI") return icons.miniIcon;
  if (desiredIcon === "SKIPPED") return icons.skipedIcon;
  if (desiredIcon === "FAILED") return icons.failedIcon;
  if (desiredIcon === "REQUIRED") return icons.requiredIcon;
  if (desiredIcon === "OPTIONAL") return icons.optionalIcon;
  if (desiredIcon === "NOTREQUIRED") return icons.notRequiredIcon;
}

export default {
  COMPLETED: {
    color: "#1B8625",
    border: "#1B8625",
    text: "#FFFFFF",
  },
  MINI: {
    color: "#7DBB2E",
    border: "#7DBB2E",
    text: "#FFFFFF",
  },
  SKIPPED: {
    color: "#2A1D7A",
    border: "#2A1D7A",
    text: "#FFFFFF",
  },
  FAILED: {
    color: "#FF3434",
    border: "#FF3434",
    text: "#FFFFFF",
  },
  REQUIRED: {
    color: "#535353",
    border: "#535353",
    text: "#FFFFFF",
  },
  OPTIONAL: {
    color: "#FFFFFF",
    border: "#000000",
    text: "#000000",
  },
  NOTREQUIRED: {
    color: "#FFFFFF",
    border: "#C1BDBD",
    text: "#000000",
  },
};
