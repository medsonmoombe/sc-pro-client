import { Grid, IconButton, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import home_img from "../../assests/images/home_im.png";
import { useStyles } from "../styles";
import React from "react";
import About from "../About/About";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "8rem",
            marginBottom: "8rem"
          }}
        >
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
                  gap: "1rem",
                }}
              >
                <Typography variant="h3" className={classes.homeText}>
                  The Best Online Courses
                </Typography>
                <Typography variant="h5" className={classes.homeText}>
                  The Best Online Learning PlartForm
                </Typography>
                <p
                  sx={{
                    color: "#000",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                </p>
              </Container>
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
                  fontFamily:"'Roboto', sans-serif",
                  padding: "1rem 1rem 1rem ",
                  ":hover": {
                    color:"#34c6eb",
                    border: "1px solid #34c6eb",
                    backgroundColor:"#fff",
                    transition: "0.5s ease-out"
                  }
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
                  fontFamily:"'Roboto', sans-serif",
                  backgroundColor:"transparent",
                  border:"1px solid #34c6eb",
                  padding: "1rem 1rem 1rem ",
                  ":hover": {
                    color:"#fff",
                    border: 0,
                    backgroundColor:"#34c6eb",
                    transition: "0.5s ease-out"
                  }
                }}
              >
                Join Now
              </Link>
            </Grid>
          </Grid>
          <Grid item sm></Grid>
          <Grid>
            <img
              src={home_img}
              alt="e-learnining"
              sx={{ objectFit: "cover" }}
            />
          </Grid>
        </Grid>
      </Container>
      <About/>
    </>
  );
};

export default Home;
