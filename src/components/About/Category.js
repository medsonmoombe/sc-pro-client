import { Typography } from "@mui/material";
import { Container } from "@mui/system";
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
        marginBottom: "3rem",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        component="div"
      >
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            gap: ".3rem",
            alignItems: "flex-end",
          }}
          component="div"
        >
          <Typography className={classes.span1} component="div"></Typography>
          <Typography className={classes.span} component="span"></Typography>
        </Typography>
        <Typography
          sx={{
            marginLeft: 2,
            marginRight: 2,
            fontSize: 15,
            fontWeight: 500,
            color: "#34c6eb",
          }}
          variant="h6"
        >
          CATEGORIES
        </Typography>
        <Typography className={classes.div} component="div">
          <Typography className={classes.span2} component="span"></Typography>
          <Typography className={classes.span} component="span"></Typography>
        </Typography>
      </Typography>
      <Typography sx={{ fontWeight: 500, marginBottom: "1.5rem" }} variant="h4">
        Courses Categories
      </Typography>
      <CoursesCategories />
    </Container>
  );
};

export default Category;
