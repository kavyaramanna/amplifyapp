const styles = (theme) => ({
  addGrid: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(5),
    float: "right",
  },
  addIcon: {
    background: "linear-gradient(#0C3064,#0B9DBC)",
    color: "white",
    float: "right",
    "&:hover": {
      background: "linear-gradient(#0C3064,#0B9DBC)",
    },
  },
  addEmployee: {
    float: "right",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(4),
    marginTop: theme.spacing(2),
    color: "black",
    opacity: 0.5,
    fontWeight: "bold",
    fontFamily: "Courier",
    fontSize: "20px",
  },
  expansionPaper: {
    width: "90vw",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),

    [theme.breakpoints.down("sm")]: {
      width: "95vw",
      marginRight: "auto",
      marginLeft: "auto",
    },
  },
  headingTypography: {
    fontSize: "18px",
    fontFamily: "courier",
    opacity: "1",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      opacity: "1",
    },
  },
  iconStyle: {
    color: "#0B9DBC",
    "&:hover": {
      color: "#0B9DBC",
    },
  },
  paginationAlign: {
    marginBottom: theme.spacing(5),
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
});
export default styles;
