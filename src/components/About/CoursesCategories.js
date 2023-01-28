import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import courseImage from "../../assests/images/about_us.jpg";
import { useStyles } from "../styles";

const CoursesCategories = () => {
  const classes = useStyles();
  return (
    <>
      <Box display="grid" sx={{
        width: "100%"
      }} gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 8" gridRow="span 1">
          <Typography
            className={classes.img1}
            component="img"
            src={courseImage}
            alt="course"
          />
        </Box>
        <Box gridColumn="span 4" gridRow="span 2">
          <Typography
            sx={{
              width: "100%",
              height: "29.5rem",
              objectFit: "cover",
              marginBottom: 0
            }}
            component="img"
            src={courseImage}
            alt="course"
          />
        </Box>
        <Box gridColumn="span 4" gridRow="span 1">
          <Typography
            sx={{
              width: "100%",
              height: "13rem",
              objectFit: "cover",
            }}
            component="img"
            src={courseImage}
            alt="course"
          />
        </Box>
        <Box gridColumn="span 4" gridRow="span 1">
          <Typography
            sx={{
              width: "100%",
              height: "13rem",
              objectFit: "cover",
            }}
            component="img"
            src={courseImage}
            alt="course"
          />
        </Box>
      </Box>
    </>
  );
};

export default CoursesCategories;
