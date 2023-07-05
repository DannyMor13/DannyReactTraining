import { SxProps } from "@mui/material";

const cardStyle: SxProps = {
  width: 300,
  height: 345,
  textAlign: "center",
  position: "relative",
};

const cardBtnsStyle: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
};

export { cardStyle, cardBtnsStyle };
