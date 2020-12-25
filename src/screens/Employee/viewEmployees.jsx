import React, { Component } from "react";
import {
  Typography,
  Grid,
  Paper,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Fab,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { listTodos } from "../../graphql/queries";
import { API } from "aws-amplify";
import { deleteTodo as deleteTodoMutation } from "../../graphql/mutations";
import { getTodo } from "../../graphql/queries";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import "../../App.css";
import EmptyListing from "../../components/emptyListing/emptyListing";
export class ViewEmployees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      isOpen: false,
      activePage: 1,

      rowsPerPage: 3,
      pageNumber: 1,
      lists: [],
    };
  }
  componentDidMount() {
    this.handleListAllTodo();
  }
  handleListAllTodo = async () => {
    try {
      const apiData = await API.graphql({ query: listTodos });

      this.setState({
        ...this.state,
        lists: apiData.data.listTodos.items.sort(
          (a, b) => a.employeeId - b.employeeId
        ),

        totalCount: apiData.data.listTodos.items.length,
      });
    } catch (error) {
      console.log("Error!");
    }
  };
  deleteList = async ({ id }) => {
    const newListsArray = this.state.lists.filter((list) => list.id !== id);
    this.setState({
      ...this.state,
      lists: newListsArray,
    });

    await API.graphql({
      query: deleteTodoMutation,
      variables: { input: { id } },
    });
    alert("Employee deleted successfully");
  };
  handleClickEditOpen = async ({ id }) => {
    await API.graphql({
      query: getTodo,
      variables: { id },
    });
  };
  handleClickAdd = () => {
    this.props.navigateTo("/employees/add");
  };
  handleClickEdit = (id) => {
    this.props.navigateTo(`/employees/edit/${id}/`);
  };
  handlePageChange = (event, pageNumber) => {
    this.setState({
      activePage: pageNumber,
    });
  };
  render() {
    const { classes } = this.props;

    const indexOfLastPost = this.state.activePage * this.state.rowsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.rowsPerPage;
    const currentLists = this.state.lists.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    return (
      <div className="App-header">
        <Grid container direction="row" justify="center" alignItems="center">
          {currentLists.length !== 0 ? (
            <>
              {currentLists.map((list) => {
                return (
                  <Paper elevation={8} className={classes.expansionPaper}>
                    <ExpansionPanel key={list.id}>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Grid
                          container
                          spacing={3}
                          direction="row"
                          alignItems="center"
                        >
                          <Grid item xs={12} sm={3}>
                            <Typography className={classes.headingTypography}>
                              {list.employeeId}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <Typography className={classes.headingTypography}>
                              {list.employeeName}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <EditIcon
                              onClick={() => this.handleClickEdit(list.id)}
                              className={classes.iconStyle}
                            />
                          </Grid>

                          <Grid item xs={12} sm={3}>
                            <DeleteIcon
                              className={classes.iconStyle}
                              onClick={() => this.deleteList(list)}
                            />
                          </Grid>
                        </Grid>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Grid container direction="row">
                          <Grid item xs={12} direction="column">
                            <Grid container direction="row">
                              <Grid
                                container
                                direction="row"
                                className={classes.gridContent}
                              >
                                <Typography
                                  className={classes.gridHeadingTypography}
                                >
                                  Education :
                                </Typography>

                                <Typography className={classes.gridTypography}>
                                  {list.education}
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              className={classes.gridContent}
                            >
                              <Typography
                                className={classes.gridHeadingTypography}
                              >
                                Designation :
                              </Typography>

                              <Typography className={classes.gridTypography}>
                                {list.designation}
                              </Typography>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              className={classes.gridContent}
                            >
                              <Typography
                                className={classes.gridHeadingTypography}
                              >
                                BloodGroup :
                              </Typography>

                              <Typography className={classes.gridTypography}>
                                {list.bloodGroup}
                              </Typography>
                            </Grid>
                            <Grid
                              container
                              direction="row"
                              className={classes.gridContent}
                            >
                              <Typography
                                className={classes.gridHeadingTypography}
                              >
                                Contact Number :
                              </Typography>

                              <Typography className={classes.gridTypography}>
                                {list.contactNumber}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </Paper>
                );
              })}
            </>
          ) : (
            <EmptyListing emptyText="Sorry No Employees found" />
          )}

          <Grid className={classes.addGrid} alignContent="right">
            <Pagination
              className={classes.paginationAlign}
              activePage={this.state.activePage}
              count={Math.ceil(this.state.totalCount / this.state.rowsPerPage)}
              rowsPerPage={this.state.rowsPerPage}
              onChange={this.handlePageChange}
              variant="outlined"
              shape="rounded"
              color="primary"
              alignItems="left"
              component="div"
            ></Pagination>
            <span className={classes.addEmployee}>Add Employee</span>

            <Fab className={classes.addIcon} aria-label="add">
              <AddIcon onClick={this.handleClickAdd} />
            </Fab>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    navigateTo: (url) => dispatch(push(url)),
  };
}
const StyledViewEmployees = withStyles(styles)(ViewEmployees);
export default connect(null, mapDispatchToProps)(StyledViewEmployees);
