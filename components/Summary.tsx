import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { makeStyles, createStyles, Theme  } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { ExpenseContext } from "./context/context";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(25),
      height: theme.spacing(8),
    },
    display: "flex",
    justifyContent: "center",
  },
  summary: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    width: 250
  },
}));

function Summary() {
  const classes = useStyles();
  const { getIncome, getExpense } = useContext(ExpenseContext);
  return (
    <div className={classes.root}>
      <Paper className={classes.summary} elevation={3}>
        <Typography style={{ margin: "3px", color: "green" }}>
          Income:
          <span
            style={{
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            {getIncome()}
          </span>
        </Typography>
        <div style={{ borderLeft: "4px solid blue", height: "50px" }}></div>
        <Typography style={{ margin: "3px", color: "red" }}>
          Expense:
          <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            {getExpense()}
          </span>
        </Typography>
      </Paper>
    </div>
  );
}

export default Summary;
