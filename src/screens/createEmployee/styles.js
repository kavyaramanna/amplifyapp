const styles = (theme) => ({
  overallGrid: {
    marginTop: theme.spacing(8),
  },
  gridContainer: {
    height: "100%",
  },

  addImage: {
    width: "22vw",

    marginBottom: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      //   marginTop: theme.spacing(10),
    },
  },
  addGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
    float: "right",
  },
  addIcon: {
    background: "#FF9900",
    color: "white",
    float: "right",
    "&:hover": {
      background: "#00688B",
    },
  },
  addEmployee: {
    float: "right",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(4),
    marginTop: theme.spacing(2),
    color: "black",
    opacity: 0.4,
    fontWeight: "bold",
    fontFamily: "Courier",
    fontSize: "20px",
  },
  expansionPaper: {
    width: "50vw",

    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
  },
  headingTypography: {
    fontSize: "18px",
    fontFamily: "courier",
    opacity: "0.5",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      opacity: "1",
    },
  },
  iconStyle: {
    color: "#0EBFE9",
    "&:hover": {
      color: "#FF9900",
    },
  },
  gridContent: {
    marginBottom: theme.spacing(2),
  },
  gridHeadingTypography: {
    fontFamily: "Courier",
    fontSize: "18px",
    fontWeight: "bold",
    opacity: "0.5",
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      opacity: "0.8",
    },
  },
  gridTypography: {
    fontFamily: "Courier",
    fontSize: "18px",
    fontWeight: "bold",
    opacity: 0.5,
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      opacity: "0.8",
    },
  },
  leftImage: {
    position: "absolute",
    // position: "relative",
    width: "50vw",
    height: "100vh",
  },

  LoginGrid: {
    height: "100%",
    // display: flex;
    // justify-content: center;
    // align-items: flex-end;
  },
  leftImage1: {
    position: "relative",
    width: "80%",
    float: "left",
    // marginTop: theme.spacing(14),
    // marginRight: theme.spacing(10),
  },
  typographyStyle: {
    color: "white",
    fontFamily: "courier",
    fontSize: "12px",
    opacity: 0.5,
    float: "bottom",
  },
});
export default styles;
