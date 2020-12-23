import React, { Component } from "react";
import {
  Typography,
  Grid,
  Paper,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Fab,
  Hidden,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import bg from "../../assets/images/Bg.png";
import commerce from "../../assets/images/woocommerce.svg";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { listTodos } from "../../graphql/queries";
import { API } from "aws-amplify";
import { deleteTodo as deleteTodoMutation } from "../../graphql/mutations";
import { getTodo } from "../../graphql/queries";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import "../../App.css";
export class TeamMembers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      isOpen: false,
      lists: [],
    };
  }
  async componentDidMount() {
    console.log("dfcghjkl");
    try {
      const apiData = await API.graphql({ query: listTodos });
      this.setState({
        ...this.state,
        lists: apiData.data.listTodos.items,
      });
      console.log(this.state.lists);
    } catch (error) {
      console.log("Error!");
    }
  }
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
  };
  handleClickEditOpen = async ({ id }) => {
    await API.graphql({
      query: getTodo,
      variables: { id },
    });
    console.log(id);
  };
  handleClickAdd = () => {
    this.props.navigateTo("/employees/add");
  };
  handleClickEdit = (id) => {
    this.props.navigateTo(`/employees/edit/${id}/`);
  };
  render() {
    const { classes } = this.props;
    const { lists } = this.state;
    const { isOpen } = this.state;
    return (
      <div>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Grid container direction="row">
              <Grid item xs>
                <Paper className={classes.expansionPaper}>
                  {lists.map((list) => {
                    return (
                      <ExpansionPanel key={list.id}>
                        <ExpansionPanelSummary
                          expandIcon={<ExpandMoreIcon></ExpandMoreIcon>}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Grid
                            container
                            direction="row"
                            justify="space-evenly"
                          >
                            <Grid style={{ float: "right" }}>
                              <Typography className={classes.headingTypography}>
                                {list.employeeId}
                              </Typography>
                            </Grid>
                            <Grid>
                              <Typography className={classes.headingTypography}>
                                {list.employeeName}
                              </Typography>
                            </Grid>
                            <Grid>
                              <EditIcon
                                onClick={() => this.handleClickEdit(list.id)}
                                className={classes.iconStyle}
                              />
                            </Grid>

                            <Grid>
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
                                    Education
                                  </Typography>

                                  <Typography
                                    className={classes.gridTypography}
                                  >
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
                    );
                  })}
                </Paper>
                <br></br>
                <Grid className={classes.addGrid} alignContent="right">
                  <span className={classes.addEmployee}>Add Employee</span>

                  <Fab className={classes.addIcon} aria-label="add">
                    <AddIcon onClick={this.handleClickAdd} />
                  </Fab>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            justify="center"
            alignItems="center"
            className={classes.LoginGrid}
          >
            <Hidden smDown>
              <img src={bg} className={classes.leftImage} />
              <img src={commerce} className={classes.leftImage1} />
              <Grid item xs={12}>
                <Typography className={classes.typographyStyle}>
                  Propel Your Ecommerce Business to The Next Level
                </Typography>
              </Grid>
            </Hidden>
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
const StyledTeamMembers = withStyles(styles)(TeamMembers);
export default connect(null, mapDispatchToProps)(StyledTeamMembers);
