import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "../appBar";

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24,
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    // flexGrow: 1,
    // padding: theme.spacing.unit,
    // paddingBottom: theme.spacing.unit * 3,
    // backgroundImage: "purple",
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
        {/* <AppBar /> */}
        <main className={classes.content}>{this.props.children}</main>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
