import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Heading from "../Heading";
import { useStyles } from "../styles";
import CoursesCategories from "./CoursesCategories";

const Category = () => {
  const classes = useStyles();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "1rem",
      }}
    >
     <Heading title="Courses Categories" sm_title="CATEGORIES"/>
      <CoursesCategories />
    </Container>
  );
};

export default Category;
