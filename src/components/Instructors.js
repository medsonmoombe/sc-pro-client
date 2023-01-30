import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { instructorsInfo } from "./About/cardsInfor";
import Heading from "./Heading";

const Instructors = () => {
  return (
    <>
      <Heading title="Expert Instructors" sm_title="INSTRUCTORS" />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        {instructorsInfo.map((item) => {
          return (
            <Card
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
              }}
            >
              <CardContent
                sx={{
                  width: "300px",
                  margin: 0,
                  padding: 0,
                  backgroundColor: "#dcf7e6",
                }}
                key={item.id}
              >
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  component="div"
                >
                  <Typography
                    sx={{
                      objectFit: "cover",
                      width: "100%",
                      height: "300px",
                      margin: "auto",
                    }}
                    component="img"
                    src={item.img}
                    alt="instructor"
                  />
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#dcf7e6",
                    width: "100px",
                    height: "40px",
                    padding: 1,
                    position: "relative",
                    bottom: "2rem",
                    gap: 1,
                    margin: "auto",
                  }}
                  component="div"
                >
                  <Typography
                    sx={{
                      backgroundColor: "#34c6eb",
                      padding: "2px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    component="span"
                  >
                    {item.facebook}
                  </Typography>
                  <Typography
                    sx={{
                      backgroundColor: "#34c6eb",
                      padding: "2px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    component="span"
                  >
                    {item.twitter}
                  </Typography>
                  <Typography
                    sx={{
                      backgroundColor: "#34c6eb",
                      padding: "2px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    component="span"
                  >
                    {item.insta}
                  </Typography>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                  }}
                  component="div"
                >
                  <Typography component="p">{item.name}</Typography>
                  <Typography component="p">{item.name}</Typography>
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default Instructors;
