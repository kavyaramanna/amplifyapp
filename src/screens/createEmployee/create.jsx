import React, { Component } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  DialogActions,
} from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";
import styles from "./createStyles";
import { API } from "aws-amplify";
import { createTodo as createTodoMutation } from "../../graphql/mutations";
import { getTodo } from "../../graphql/queries";
import { updateTodo } from "../../graphql/mutations";

export class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      data: {
        employeeId: "",
        employeeName: "",
        designation: "",
        bloodGroup: "",
        contactNumber: "",
        education: "",
      },
      lists: [],
    };
  }

  async componentDidMount() {
    console.log(this.props.match.params.emp_id);
    if (this.props.match.params.emp_id) {
      const apiData = await API.graphql({
        query: getTodo,
        variables: { id: this.props.match.params.emp_id },
      });
      console.log("test api", apiData);
      console.log(this.state.input);
      //   console.log(getTodo);
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          employeeId: apiData.data.getTodo.employeeId,
          employeeName: apiData.data.getTodo.employeeName,
          education: apiData.data.getTodo.education,
          designation: apiData.data.getTodo.designation,
          bloodGroup: apiData.data.getTodo.bloodGroup,
          contactNumber: apiData.data.getTodo.contactNumber,
        },
      });
    }
    // if (this.state.id === "_add") {
    //   console.log("test 01", this.state.id);
    //   return;
    // } else {
  }
  //   }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
    console.log(this.state.data);
  };
  handleSubmit = async (input) => {
    if (this.props.match.params.emp_id) {
      const passData = this.state.data;
      passData.id = this.props.match.params.emp_id;
      console.log("test data", this.state.data);
      const data = await API.graphql({
        query: updateTodo,
        variables: { input: this.state.data },
      });
      console.log("result", data);
    } else {
      const data = await API.graphql({
        query: createTodoMutation,
        variables: { input: this.state.data },
      });

      console.log("Success!");
    }
  };

  render() {
    const { data } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <form>
          <Grid container>
            <Grid container spacing={2} direction="row" item xs={12}>
              <Grid item xs={12} md={6}>
                <Typography className={classes.createHeadingTypography}>
                  Employee ID
                </Typography>

                <TextField
                  fullWidth
                  type="text"
                  name="employeeId"
                  value={data.employeeId}
                  onChange={this.handleChange}
                  id="outlined-margin-dense"
                  margin="dense"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography className={classes.createHeadingTypography}>
                  Employee Name
                </Typography>

                <TextField
                  fullWidth
                  type="text"
                  name="employeeName"
                  value={data.employeeName}
                  onChange={this.handleChange}
                  id="outlined-margin-dense"
                  margin="dense"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} direction="row" item xs={12}>
              <Grid item xs={12} md={6}>
                <Typography className={classes.createHeadingTypography}>
                  Education
                </Typography>

                <TextField
                  fullWidth
                  name="education"
                  value={data.education}
                  onChange={this.handleChange}
                  type="text"
                  id="outlined-margin-dense"
                  margin="dense"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography className={classes.createHeadingTypography}>
                  Designation
                </Typography>

                <TextField
                  fullWidth
                  name="designation"
                  value={data.designation}
                  onChange={this.handleChange}
                  type="text"
                  id="outlined-margin-dense"
                  margin="dense"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} direction="row" item xs={12}>
              <Grid item xs={12} md={6}>
                <Typography className={classes.createHeadingTypography}>
                  Blood Group
                </Typography>

                <TextField
                  fullWidth
                  name="bloodGroup"
                  value={data.bloodGroup}
                  onChange={this.handleChange}
                  type="text"
                  id="outlined-margin-dense"
                  margin="dense"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography className={classes.createHeadingTypography}>
                  Contact Number
                </Typography>

                <TextField
                  fullWidth
                  name="contactNumber"
                  value={data.contactNumber}
                  onChange={this.handleChange}
                  type="text"
                  id="outlined-margin-dense"
                  margin="dense"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <DialogActions>
              <Grid direction="row" item xs={12}>
                <Button
                  className={classes.saveButton}
                  onClick={this.handleSubmit}
                >
                  Save
                </Button>

                <Button variant="outlined" className={classes.clearButton}>
                  Clear
                </Button>
              </Grid>
            </DialogActions>
          </Grid>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Create);
