import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
      paddingRight: 0,
      margin: 0,
    },
    icon: {
        color:"#34c6eb",
    },
    button: {
      display: "flex",
      backgroundColor: "#34c6eb",
      alignContent: "center",
      alignItems: "center",
      padding: 4,
    },
    text: {
      paddingLeft: "4rem",
      color: "#fff",
      fontFamily: "Roboto, sans-serif",
      fontSize: "15px",
      fontWeight: "500",
    },

    homeText: {
        color: "#34c6eb",
        fontFamily: "Roboto, sans-serif",
        fontSize: "25px",
        fontWeight: "500",
    },

    buttonHover: {
      "&:hover": {
        color: "#34c6eb",
        transition: ".4s ease-in-out"
      },
    },
    buttons : {
        backgroundColor: "#34c6eb",
        color: "#fff",
        border: 0,
        padding: "1rem 1rem 1rem ",
        marginRight: "5rem"
    },

    img: {
      width: "500px",
      height: "400px",
      objectFit: "cover"
    },
    img1: {
      width: "100%",
      height: "15rem",
      objectFit: "cover"
    },
    div : {
       display: "flex",
       flexDirection: "column",
       justifyContent: "center",
       gap: ".3rem",
       alignContent: "center"
    },

    span: {
      border: "1px solid #34c6eb",
      width: "50px",
      borderRadius: "5px"
    },
    span2: {
      border: "1px solid #34c6eb",
      width: "30px",
      borderRadius: "5px"
    }, 
    span1: {
      border: "1px solid #34c6eb",
      width: "30px",
      borderRadius: "5px",
    },
    aboutHearding :{
      color: "#000",
      fontFamily: "Roboto, sans-serif",
      fontSize: "25px",
      fontWeight: "600",
    }
  }));
  