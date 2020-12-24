import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: "0",
    left: "0",
    height: "110vh",
    width: "100vw",
  },
  textStyle: {
    color: theme.palette.grey.A200,
    marginLeft: "3%",
    marginTop: "6%",
  },
});

class EmptyListing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography
          align="center"
          className={classes.textStyle}
          gutterBottom
          variant="h5"
          component="h5"
        >
          {this.props.emptyText}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(EmptyListing);
