import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import courseImage from "../../assests/images/about_us.jpg";
import PopularCourses from "../courses/PopularCourses";
import { useStyles } from "../styles";
import { coursesCategories } from "./cardsInfor";

const CoursesCategories = () => {
  const classes = useStyles();
  return (
    <> 
      <Box
        display="grid"
        sx={{
          width: "95%",
          marginBottom: "6rem"
        }}
        gridTemplateColumns="repeat(12, 1fr)"
        gap={2}
      >
        <Box key={coursesCategories[0].id} gridColumn="span 8" gridRow="span 1" sx={{ position: "relative" }}>
          <Typography
            className={classes.img1}
            component="img"
            src={coursesCategories[0].img}
            alt="course"
          />
          <Typography className={classes.absolute_course_div} component="div">
            <Typography className={classes.course_im_title} component="p">
              {coursesCategories[0].course}
            </Typography>
            <Typography className={classes.course_im_text} component="span">
              {coursesCategories[0].num_of_courses}
            </Typography>
          </Typography>
        </Box>
        <Box key={coursesCategories[1].id} gridColumn="span 4" gridRow="span 2" sx={{ position: "relative" }}>
          <Typography
            sx={{
              width: "100%",
              height: "29.5rem",
              objectFit: "cover",
              marginBottom: 0,
            }}
            component="img"
            src={coursesCategories[1].img}
            alt="course"
          />
          <Typography component="div" className={classes.absolute_course_div}>
            <Typography className={classes.course_im_title} component="p">
            {coursesCategories[1].course}
            </Typography>
            <Typography className={classes.course_im_text} component="span">
             {coursesCategories[1].num_of_courses}
            </Typography>
          </Typography>
        </Box>
        <Box key={coursesCategories[2].id} gridColumn="span 4" gridRow="span 1" sx={{ position: "relative" }}>
          <Typography
            sx={{
              width: "100%",
              height: "13rem",
              objectFit: "cover",
            }}
            component="img"
            src={coursesCategories[2].img}
            alt="course"
          />
          <Typography component="div" className={classes.absolute_course_div}>
            <Typography className={classes.course_im_title} component="p">
              {coursesCategories[2].course}
            </Typography>
            <Typography className={classes.course_im_text} component="span">
             {coursesCategories[2].num_of_courses}
            </Typography>
          </Typography>
        </Box>
        <Box key={coursesCategories[3].id} gridColumn="span 4" gridRow="span 1" sx={{ position: "relative" }}>
          <Typography
            sx={{
              width: "100%",
              height: "13rem",
              objectFit: "cover",
            }}
            component="img"
            src={coursesCategories[3].img}
            alt="course"
          />
          <Typography component="div" className={classes.absolute_course_div}>
            <Typography className={classes.course_im_title} component="p">
             {coursesCategories[3].course}
            </Typography>
            <Typography className={classes.course_im_text} component="span">
              {coursesCategories[3].num_of_courses}
            </Typography>
          </Typography>
        </Box>
      </Box>
      <PopularCourses/>
    </>
  );
};

export default CoursesCategories;
