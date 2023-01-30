import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import img from "../../assests/images/about_us.jpg";
import Heading from "../Heading";
import { useStyles } from "../styles";
import { useEffect, useState } from "react";
import { popularCourseInfo, popularCourses } from "../About/cardsInfor";
import { Link } from "react-router-dom";

const colors = { orange: "#34c6eb", gray: "#a9a9a9" };
const PopularCourses = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  // const ratings = useSelector((state: any | []) => state.ratings);

  useEffect(() => {
    setRating(3);
  }, []);

  console.log(colors.orange);

  const star = Array(5).fill(0);
  const handleClick = () => {
    setRating(5);
  };

  const classes = useStyles();
  return (
    <>
      <Heading title="Popular Courses" sm_title="COURSES" />
      <Box
        sx={{
          display: "flex",
          gap: 4,
        }}
      >
        {popularCourses.map((item) => {
          return (
            <Card
              sx={{
                maxWidth: "100%",
                gap: 2,
                height: "auto",
                marginTop: "20px",
                marginLeft: 0,
                borderRadius: 0,
                position: "relative",
              }}
            >
              <Typography
                sx={{
                  height: 200,
                  width: "100%",
                  objectFit: "cover",
                }}
                component="img"
                src={img}
              />
              <Typography
                className={classes.absolute_popularCourse_div}
                component="div"
              >
                <Link
                className={classes.popular_course_link1}
                  href="/"
                >
                  Read more
                </Link>
                <Link className={classes.popular_course_link2} href="/">Join now</Link>
              </Typography>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#dcf7e6",
                  flexDirection: "column",
                  // paddingTop: 6,
                  gap: 2,
                  ":hover": {
                    border: 0,
                    transition: "0.5s ease-out",
                  },
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: 25,
                    fontWeight: 600,
                    textTransform: "capitalize",
                    textAlign: "center",
                  }}
                >
                  K450.0
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  component="div"
                >
                  {star.map((s, index) => {
                    return (
                      <StarRoundedIcon
                        key={index}
                        size={24}
                        sx={{
                          color: `${
                            (hover || rating) > index
                              ? colors.orange
                              : colors.gray
                          }`,
                        }}
                        onClick={() => handleClick(index + 1)}
                      />
                    );
                  })}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: 18,
                    fontWeight: 600,
                    textTransform: "capitalize",
                    textAlign: "center",
                  }}
                  gutterBottom
                  component="p"
                >
                  Web Design & Development Course for Beginners
                </Typography>
              </CardContent>
              <Typography
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  // borderTop: "1px solid #a9a9a9",
                  // borderRight: "1px solid #a9a9a9",
                  backgroundColor: "#dcf7e6",
                  fontFamily: "Roboto, sans-serif",
                  position: "relative",
                  bottom: 0,
                  width: "100%",
                }}
              >
                {popularCourseInfo.map((el) => {
                  return (
                    <Typography
                      key={el.id}
                      sx={{
                        display: "flex",
                        borderTop: "1px solid #a9a9a9",
                        borderRight: "1px solid #a9a9a9",
                        // paddingRight: 1,
                        width: "100%",
                      }}
                      component="div"
                    >
                      <Typography
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: 12,
                          padding: ".3rem",
                        }}
                        component="span"
                      >
                        {el.icon} {el.name}
                      </Typography>
                    </Typography>
                  );
                })}
              </Typography>
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default PopularCourses;
