import { Alert, Fade } from "@mui/material";
import { errorAlertContainer, errorAlert } from "./Styles/alertStyles";

interface ErrorAlertProps {
  errorOpen: boolean;
  errorMessage: string;
}

const ErrorAlert = ({ errorOpen, errorMessage }: ErrorAlertProps) => {
  return (
    <div style={errorAlertContainer}>
      <Fade in={errorOpen} timeout={200}>
        <Alert variant="filled" severity="error" icon={false} sx={errorAlert}>
          {errorMessage}
        </Alert>
      </Fade>
    </div>
  );
};

export default ErrorAlert;
