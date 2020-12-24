import React, { Component } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  DialogActions,
  FormHelperText,
} from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";
import styles from "./createStyles";
import { API } from "aws-amplify";
import { createTodo as createTodoMutation } from "../../graphql/mutations";
import { getTodo } from "../../graphql/queries";
import { updateTodo } from "../../graphql/mutations";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { find } from "lodash";
import validator from "../../services/validator";
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
      errors: {
        employeeId: "",
        employeeName: "",
        designation: "",
        bloodGroup: "",
        contactNumber: "",
        education: "",
      },
      rules: {
        employeeId: {
          required: true,
        },
        employeeName: {
          required: true,
        },
        designation: {
          required: true,
        },
        bloodGroup: {
          required: true,
        },
        contactNumber: {
          required: true,
          mobile: true,
        },
        education: {
          required: true,
        },
      },
      lists: [],
    };
  }

  componentDidMount() {
    this.getTodoById();
  }

  getTodoById = async () => {
    if (this.props.match.params.emp_id) {
      const apiData = await API.graphql({
        query: getTodo,
        variables: { id: this.props.match.params.emp_id },
      });

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
  };
  handleChange = (event) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
      errors: {
        ...this.state.errors,
        [event.target.name]: "",
      },
    });
  };
  validate = (rules, data) => {
    const errors = validator(rules)(data);
    const hasErrors = find(errors, (error) => error !== "");
    this.setState({
      ...this.state,
      errors,
    });
    return !hasErrors;
  };

  handleSubmit = async (input) => {
    const { rules, data } = this.state;
    if (this.validate(rules, data)) {
      if (this.props.match.params.emp_id) {
        const passData = this.state.data;
        passData.id = this.props.match.params.emp_id;

        const data = await API.graphql({
          query: updateTodo,
          variables: { input: this.state.data },
        });

        alert("Employee Details Edited succefully!");
      } else {
        const data = await API.graphql({
          query: createTodoMutation,
          variables: { input: this.state.data },
        });
        alert("Employee Details added succefully!");
      }
    }
  };
  handleClear = () => {
    const tempList = {
      employeeId: "",
      employeeName: "",
      designation: "",
      bloodGroup: "",
      education: "",
      contactNumber: "",
    };
    this.setState({ data: tempList }, () => {});
  };
  handleBackArrowButton = () => {
    this.props.navigateTo("/employees");
  };
  render() {
    const { data, errors } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <form>
          <Grid
            container
            spacing={3}
            direction="row"
            className={classes.headingGrid}
          >
            <ArrowBackIcon
              className={classes.arrowbackIcon}
              onClick={this.handleBackArrowButton}
            />
            <Typography className={classes.headingTypography}>
              {this.props.match.params.emp_id
                ? "Edit Employee Details"
                : "Add Employee Details"}
            </Typography>
          </Grid>
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
                  errors={errors.employeeId ? true : false}
                  onChange={this.handleChange}
                  id="outlined-margin-dense"
                  margin="dense"
                  variant="outlined"
                />
                {errors.employeeId ? (
                  <FormHelperText className={classes.ErrorText}>
                    {errors.employeeId}
                  </FormHelperText>
                ) : (
                  ""
                )}
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
                  errors={errors.employeeName ? true : false}
                  onChange={this.handleChange}
                  id="outlined-margin-dense"
                  margin="dense"
                  variant="outlined"
                />
                {errors.employeeName ? (
                  <FormHelperText className={classes.ErrorText}>
                    {errors.employeeName}
                  </FormHelperText>
                ) : (
                  ""
                )}
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
                  errors={errors.education ? true : false}
                  type="text"
                  id="outlined-margin-dense"
                  margin="dense"
                  variant="outlined"
                />
                {errors.education ? (
                  <FormHelperText className={classes.ErrorText}>
                    {errors.education}
                  </FormHelperText>
                ) : (
                  ""
                )}
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
                  errors={errors.designation ? true : false}
                  type="text"
                  id="outlined-margin-dense"
                  margin="dense"
                  variant="outlined"
                />
                {errors.designation ? (
                  <FormHelperText className={classes.ErrorText}>
                    {errors.designation}
                  </FormHelperText>
                ) : (
                  ""
                )}
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
                  errors={errors.bloodGroup ? true : false}
                  type="text"
                  id="outlined-margin-dense"
                  margin="dense"
                  variant="outlined"
                />
                {errors.bloodGroup ? (
                  <FormHelperText className={this.props.classes.ErrorText}>
                    {errors.bloodGroup}
                  </FormHelperText>
                ) : (
                  ""
                )}
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
                  errors={errors.contactNumber ? true : false}
                  type="text"
                  id="outlined-margin-dense"
                  margin="dense"
                  variant="outlined"
                />
                {errors.contactNumber ? (
                  <FormHelperText className={this.props.classes.ErrorText}>
                    {errors.contactNumber}
                  </FormHelperText>
                ) : (
                  ""
                )}
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

                <Button
                  variant="outlined"
                  className={classes.clearButton}
                  onClick={this.handleClear}
                >
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
function mapDispatchToProps(dispatch) {
  return {
    navigateTo: (url) => dispatch(push(url)),
  };
}
const StyledCreate = withStyles(styles)(Create);
export default connect(null, mapDispatchToProps)(StyledCreate);
