import {
  Box,
  Alert,
  Button,
  TextField,
  FormGroup,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { AxiosError } from "axios";
import { useStyles } from "./CreateForm.style.ts";
import { IField } from "../../types/field.type.ts";
import { SUCCESS_ALERT } from "./constants/form.const.ts";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface ICreateFormProps<T extends Record<keyof T, string>> {
  title: string;
  fieldsList: IField<T>[];
  onSubmit: (objectToCreate: T) => Promise<void>;
}

const CreateForm = <T extends FieldValues>({
  fieldsList,
  title,
  onSubmit,
}: ICreateFormProps<T>) => {
  const {
    reset,
    setError,
    register,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<T>();

  const styles = useStyles();
  const [success, setSuccess] = useState(false);

  const handleChange = () => {
    setSuccess(false);
    clearErrors("root");
  };

  const submitFn: SubmitHandler<T> = async (data) => {
    try {
      await onSubmit(data);

      reset();
      setSuccess(true);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.code === "ERR_NETWORK") {
          console.log(error);
          setError("root", {
            type: "manual",
            message: "an error occurred, try again later",
          });

          return;
        }

        setError("root", {
          type: "manual",
          message: error?.response?.data?.message,
        });

        return;
      }

      setError("root", {
        type: "manual",
        message: "an error occurred, try again later",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(submitFn)}>
      <Typography align="center" variant="h3" gutterBottom>
        {title}
      </Typography>
      <FormGroup sx={styles.formFieldArea}>
        {fieldsList.map(
          ({ key, registerOptions, label, required, ...rest }) => {
            return (
              <TextField
                {...register(key, registerOptions)}
                sx={styles.field}
                onChange={(e) => {
                  handleChange();
                  register(key).onChange(e);
                }}
                error={Boolean(errors[key])}
                helperText={
                  errors[key] ? errors[key]?.message?.toString() : " "
                }
                key={key}
                label={`${label} ${required ? "*" : ""}`}
                variant="outlined"
                fullWidth
                margin="dense"
                {...rest}
              />
            );
          }
        )}
      </FormGroup>

      <Button variant="contained" fullWidth type="submit" style={styles.button}>
        Submit
      </Button>
      <Box sx={styles.alertArea}>
        {success && (
          <Alert variant="outlined" severity="success">
            {SUCCESS_ALERT}
          </Alert>
        )}
        {errors.root && <Alert severity="error">{errors.root?.message}</Alert>}
      </Box>
    </form>
  );
};

export default CreateForm;
