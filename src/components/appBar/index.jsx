import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { AmplifySignOut } from "@aws-amplify/ui-react";

const styles = (theme) => ({
  root: {
    backgroundColor: "white",
    minHeight: "10vh",
  },
  box: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    float: "right",
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
});
export class Bar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Box className={classes.box}>
          <AmplifySignOut />
        </Box>
      </div>
    );
  }
}

export default withStyles(styles)(Bar);
