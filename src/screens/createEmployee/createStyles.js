const styles = (theme) => ({
  paper: {
    width: "35vw",

    marginBottom: theme.spacing(3),
    boderRadius: "10px",

    boxShadow: " 0 0 20px rgba(0,0,0,0.17)",

    padding: "5%",
    [theme.breakpoints.down("sm")]: {
      width: "80vw",
    },
  },
  createHeadingTypography: {
    fontFamily: "courier",
    fontSize: "18px",
    opacity: "0.6",
    fontWeight: "bold",
    float: "left",
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      opacity: "1",
    },
  },
  saveButton: {
    background: "#0EBFE9",
    color: "white",
    padding: "10px",
    width: "8vw",
    float: "right",
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(2),
    "&:hover": {
      background: "#0EBFE9",
      color: "white",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30vw",
    },
  },
  clearButton: {
    borderColor: "#0EBFE9",
    width: "8vw",
    color: "#0EBFE9",
    padding: "10px",
    float: "right",
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      width: "30vw",
    },
  },
});
export default styles;
