import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Avatar, Container, Grid, IconButton, Link } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import elogo from "../../assests/images/e-lo.png";
import { useStyles } from "../styles";

const links = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Courses",
    link: "/courses",
  },
  {
    title: "Groups",
    link: "/groups",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Header = () => {

  const [profile, setProfile] = useState(false)
  const classes = useStyles();
  return (
    <AppBar position="static" color={"transparent"} className={classes.root}>
      <Container maxWidth="xl" disableGutters={true} className={classes.root}>
        <Grid container>
          <Grid item lg={4}>
            <IconButton href="/" sx={{borderRadius:"0",}}>
              <img
                src={elogo}
                alt="e-logo"
                style={{ height: "60px", width: "200px", objectFit:"cover" }}
              />
            </IconButton>
          </Grid>
          <Grid item sm></Grid>
          <Grid
            item
            lg={4}
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              gap: "1.5rem",
              marginRight: "1.5rem"
            }}
          >
            {links.map((link) => {
              return (
                <Link
                 underline="none"
                  href={link.link}
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color:"#000",
                    fontFamily: "Roboto, sans-serif",
                    textTransform: "uppercase",
                  }}
                 className={classes.buttonHover}
                >
                  {link.title}
                </Link>
              );
            })}
            {profile && <Avatar src="/broken-image.jpg" />}
          </Grid>
          <Grid lg={2} className={classes.button}>
          <Link  className={classes.button} underline="none" href="/">
            <span className={classes.text}>Join Now</span>
            <ArrowForwardIcon sx={{ color: "#fff", marginLeft: "1rem" }} />
          </Link>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Header;
