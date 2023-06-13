import { useEffect, useState } from "react";
import { LinearProgress, Fade, Alert } from "@mui/material";
import { useSelector } from "react-redux";
import PurchaseCompletedDialog from "./PurchaseCompletedDialog";
import {
  productProgressBarContainer,
  progressBarAlert,
} from "./Styles/progressBarStyles";
import { RootState } from "../app/store";

interface ProgressBarProps {
  isOpen: boolean;
  numOfProducts: number;
}

const ProgressBar = ({ isOpen, numOfProducts }: ProgressBarProps) => {
  const productsList = useSelector((state: RootState) => state.products);
  const [progress, setProgress] = useState(0);
  const [initialLength, setInitialLength] = useState(numOfProducts);

  useEffect(() => {
    if (!isOpen) {
      setInitialLength(productsList.length);
    }
  }, [productsList, isOpen]);

  useEffect(() => {
    const totalProducts = productsList.length;
    const currentProgress = Math.floor(
      ((initialLength - totalProducts) / initialLength) * 100
    );
    setProgress(currentProgress);
  }, [productsList]);

  return (
    <div style={productProgressBarContainer}>
      <Fade in={isOpen} timeout={200}>
        <Alert
          variant="filled"
          severity="info"
          icon={false}
          sx={progressBarAlert}
        >
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ width: "200px" }}
          />
        </Alert>
      </Fade>
      {progress > 99 && <PurchaseCompletedDialog />}
    </div>
  );
};

export default ProgressBar;
