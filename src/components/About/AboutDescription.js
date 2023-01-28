import { Box, Grid, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useStyles } from "../styles";
import { aboutUs } from "./cardsInfor";
import about_us from "../../assests/images/about_us.jpg";
import Category from "./Category";

const AboutDescription = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          width: "85%",
          gap: "2rem",
          cursor: "pointer",
          marginBottom: "6rem",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "8rem",
            marginBottom: "1rem",
          }}
        >
          <Grid>
            <img src={about_us} alt="e-learnining" className={classes.img} />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <Grid>
              <Container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  position: "relative",
                  top: "-34px",
                  gap: "1rem",
                }}
              >
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    color: "#34c6eb",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "25px",
                    fontWeight: "500",
                  }}
                >
                  <Typography variant="h6">ABOUT US</Typography>
                  <Typography component="div" className={classes.div}>
                    <Typography className={classes.span2}></Typography>
                    <Typography className={classes.span}></Typography>
                  </Typography>
                </Grid>
                <Typography variant="h4" className={classes.aboutHearding}>
                  Welcome to eLEARNING
                </Typography>
                <Typography
                  sx={{
                    color: "#000",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "15px",
                    fontWeight: "400",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                </Typography>
              </Container>
            </Grid>
            <Grid sx={{
               display: "grid",
               justifyContent: "center",
               alignItems: "center",
               gridTemplateColumns: "repeat(2, 1fr)",
               gridTemplateRows: "2",
               gap: 1,
               marginLeft: "0.5rem",
            }}>
              {aboutUs.map((el) => {
                return (
                    <>
                    <Grid key={el.id}
                    sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        width: "fit-content",
                        alignItems: "center",
                        flexDirection: "row-reverse",
                        gap: ".5rem",
                    }}
                    >
                        <Typography>{el.title}</Typography>
                        <span>{el.Icon}</span>
                    </Grid>
                    </>
                );
              })}
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginLeft: "1.5rem",
                gap: "2rem",
              }}
            >
              <Link
                href="#"
                underline="none"
                color={"white"}
                sx={{
                  backgroundColor: "#34c6eb",
                  color: "#fff",
                  border: 0,
                  fontFamily: "'Roboto', sans-serif",
                  padding: "1rem 1rem 1rem ",
                  ":hover": {
                    color: "#34c6eb",
                    border: "1px solid #34c6eb",
                    backgroundColor: "#fff",
                    transition: "0.5s ease-out",
                  },
                }}
              >
                Read more
              </Link>
              <Link
                href="#"
                underline="none"
                color={"white"}
                sx={{
                  color: "#34c6eb",
                  fontFamily: "'Roboto', sans-serif",
                  backgroundColor: "transparent",
                  border: "1px solid #34c6eb",
                  padding: "1rem 1rem 1rem ",
                  ":hover": {
                    color: "#fff",
                    border: 0,
                    backgroundColor: "#34c6eb",
                    transition: "0.5s ease-out",
                  },
                }}
              >
                Join Now
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Category/>
    </>
  );
};

export default AboutDescription;
