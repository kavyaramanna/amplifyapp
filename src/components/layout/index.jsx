import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "../appBar";

const styles = (theme) => ({
  root: {
    display: "flex",
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "#fdfdfd",
    // minHeight: "85vh",
    padding: "4%",
  },
});

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar />
        <main className={classes.content}>{this.props.children}</main>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
