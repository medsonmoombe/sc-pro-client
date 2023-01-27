import { Scale } from "@mui/icons-material";
import { CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { Container } from "@mui/system";
import { useStyles } from "../styles";
import AboutDescription from "./AboutDescription";
import { whyUs } from "./cardsInfor";

const About = () => {
    const classes = useStyles();
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "2rem",
          cursor: "pointer",
          marginBottom: "5rem"
        }}
      >
        {whyUs.map((item) => {
          return (
            <Card
              sx={{
                maxWidth: 345,
                height: "auto",
                backgroundColor: "#dcf7e6",
                marginTop: "20px",
                marginLeft: 0,
                borderRadius: 0,
                ":hover": {
                  color: "#fff",
                  border: 0,
                  transform:"scale(1.04)", 
                  backgroundColor: "#34c6eb",
                  transition: "0.5s ease-out",
                },
              }}
              key={item.id}
            >
              <CardContent sx={{
                display: "flex",
                justifyContent:"center",
                alignItems: "center",
                flexDirection: "column",
                paddingTop: 6,
                gap: 2,
                ":hover": {
                  color: "#fff",
                  border: 0,
                  backgroundColor: "#34c6eb",
                  transition: "0.5s ease-out",
                },
              }}>
                <p 
                className={classes.icon}
                >
                  {item.Icon}
                </p>
                <Typography gutterBottom variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                >
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Container>
      <AboutDescription/>
    </>
  );
};

export default About;
