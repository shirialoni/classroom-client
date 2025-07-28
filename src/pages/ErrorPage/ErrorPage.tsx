import { useStyles } from "./ErrorPage.style";
import { Box, Typography } from "@mui/material";

const ErrorPage = () => {
  const styles = useStyles();

  return (
    <>
      <Box sx={styles.main}>
        <Typography variant="h1" sx={styles.header}>
          Oops!
        </Typography>
        <Typography variant="h2">Something went worng</Typography>
        <Typography variant="h6" marginTop={10}>
          please try again later, Contact us for help.
        </Typography>
      </Box>
    </>
  );
};

export default ErrorPage;
