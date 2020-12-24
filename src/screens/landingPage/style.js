const styles = (theme) => ({
  rightGrid: {
    padding: "30px",
  },
  logo: {
    width: "45%",
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      width: "40%",
    },
  },
  imagexsGrid: {
    width: "100vw",
    margin: "auto",
    marginTop: theme.spacing(5),
  },

  bodyTypography: {
    fontSize: "20px",
    fontFamily: "courier",
    fontStyle: "justify",
    fontWeight: "bold",
    opacity: "0.5",
    marginTop: theme.spacing(4),
  },
  bodyTypographyKnowMore: {
    fontSize: "20px",
    fontFamily: "courier",
    fontStyle: "justify",
    fontWeight: "bold",
    opacity: "0.5",
  },
  buttonStyle: {
    background: "linear-gradient(#0C3064,#0B9DBC)",
    padding: "10px",
    color: "white",
    width: "25vw",
    borderRadius: "10px",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      width: "60%",
    },
    [theme.breakpoints.up("md")]: {
      width: "35%",
    },
  },
  leftImage: {
    position: "absolute",

    width: "45vw",
    height: "100vh",
    padding: "0px",
    marginLeft: theme.spacing(8.5),
  },

  LoginGrid: {
    [theme.breakpoints.down("xs")]: {
      height: "50vh",
    },
    [theme.breakpoints.down("md")]: {
      width: "35%",
    },
  },
  leftImage1: {
    position: "relative",
    width: "75%",
    float: "right",
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(15),
    marginRight: theme.spacing(4),
  },
  typographyStyle: {
    color: "white",
    fontFamily: "courier",
    fontSize: "12px",
    opacity: 0.5,
    float: "down",
  },
});
export default styles;
