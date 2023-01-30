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
    course_im_title: {
      textTransformation: "uppercase",
      paddingLeft: "0.2rem",
      color: "#000",
      fontFamily: "Roboto, sans-serif",
      fontSize: "18px",
      fontWeight: "500",
    },
    course_im_text: {
      paddingLeft: "0.2rem",
      color: "#34c6eb",
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
    absolute_course_div : {
      display:"flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection:"column",
      position: "absolute",
      bottom: 4,
      right: 0,
      backgroundColor: "#fff",
      padding: 2,
      width: 200,
      border: "1px solid #34c6eb",
      cursor: "pointer",
      textTransform: "uppercase"
    },

    absolute_popularCourse_div : {
      display:"flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: "40%",
      left: "50%",
      gap: 2,
      transform: "translate(-50%, -50%)",
      padding: 1,
      width: 200,
      cursor: "pointer",
      textTransform: "capitalize"
    },

    popular_course_link1: {
      fontSize: "12px",
      textDecoration: "none",
      backgroundColor: "#34c6eb",
      color: "#fff",
      borderTopLeftRadius: "20px",
      borderBottomLeftRadius: "20px",
      padding: 4,
      width: "50%",
      textAlign: "center",
    },
    popular_course_link2: {
      fontSize: "12px",
      textDecoration: "none",
      backgroundColor: "#34c6eb",
      color: "#fff",
      borderTopRightRadius: "20px",
      borderBottomRightRadius: "20px",
      padding: 4,
      width: "50%",
      textAlign: "center",
    },

    img: {
      width: "500px",
      height: "400px",
      objectFit: "cover"
    },
    img1: {
      width: "100%",
      position: "relative",
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
  