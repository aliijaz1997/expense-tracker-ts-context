import React, { useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm, Controller } from "react-hook-form";
import { ExpenseContext } from "./context/context";
import { Transaction, FormValues } from "./types/interface";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(2),
    
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "230px",
      },
      "& .MuiButtonBase-root": {
        margin: theme.spacing(2),
      },
    },
}));
const AddTransaction = () => {
  const classes = useStyles();
  const { handleSubmit, control, reset } = useForm<FormValues>();
  const { handleAddTransaction } = useContext(ExpenseContext);
  const onSubmit = (data : Transaction) => {
    console.log(typeof data.amount);
    handleAddTransaction(data);
    reset({ description: " ", amount: 0 });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Description"
              type="text"
              variant="outlined"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "Description is mandatory" }}
        />
        <Controller
          name="amount"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Amount"
              type="number"
              variant="outlined"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
          rules={{ required: "Amount is mandatory" }}
        />
        <div>
          <Button type="submit" variant="outlined">
            Add Transaction
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
