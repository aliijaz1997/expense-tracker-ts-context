import React, { useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { ExpenseContext } from "./context/context";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    overflow: "auto",
    position: "relative",
  },

  list: {
    maxHeight: 300,
    textAlign: "center",
  },
  listitem: {
    backgroundColor: "lightBlue",
    margin: "4px",
  },
}));

function TransactionSummary() {
  const classes = useStyles();
  const { state, handleDeleteTransaction } = useContext(ExpenseContext);
  // console.log(state);
  return (
    <div className={classes.root}>
      <List className={classes.list}>
        {state.transaction.map((data) => (
          <div key={data.id}>
            <ListItem className={classes.listitem}>
              <ListItemText primary={data.description} />
              <ListItemText secondary={`$${data.amount}`} />
              <IconButton
                onClick={() => {
                  handleDeleteTransaction(data.id);
                }}
              >
                <DeleteRoundedIcon />
              </IconButton>
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );
}

export default TransactionSummary;
