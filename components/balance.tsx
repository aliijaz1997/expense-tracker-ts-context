import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { ExpenseContext } from "./context/context";

function Balance() {
  const { getIncome, getExpense } = useContext(ExpenseContext);
  console.log(getIncome(), getExpense());
  
  const totalBalance = getIncome() + getExpense();
  return (
    <div style={{ textAlign: "center", color: "goldenrod" }}>
      <Typography variant="h6">
        Current Balance is{" "}
        <span style={{ fontSize: "2rem" }}>${totalBalance}</span>
      </Typography>
    </div>
  );
}

export default Balance;
