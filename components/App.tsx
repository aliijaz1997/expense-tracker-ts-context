import React from "react";
import Heading from "./heading";
import Balance from "./balance";
import Summary from "./Summary";
import TransactionSummary from "./transactionSummary";
import AddTransaction from "./addform";

function App() {
  return (
    <>
      <Heading />
      <Balance />
      <Summary />
      <TransactionSummary />
      <AddTransaction />
    </>
  );
}

export default App;
