import { Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import img from '../../assests/images/about_us.jpg';
import Heading from '../Heading';
import { useStyles } from '../styles';

const PopularCourses = () => {
      const classes = useStyles();
  return (
    <> 
    <Box>
  
        <Heading title="Popular Courses" sm_title="COURSES"/>
            <Card
              sx={{
                maxWidth: 345,
                height: "auto",
                marginTop: "20px",
                marginLeft: 0,
                borderRadius: 0,
              }}
            >
                <Typography sx={{
                    height: 200,
                    width: "100%",
                    objectFit:"cover"
                }} component="img" src={img}>

                </Typography>
              <CardContent sx={{
                display: "flex",
                justifyContent:"center",
                alignItems: "center",
                backgroundColor: "#dcf7e6",
                flexDirection: "column",
                paddingTop: 6,
                gap: 2,
                ":hover": { 
                  border: 0,
                  transition: "0.5s ease-out",
                },
              }}>
                <Typography component="p" 
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
                <Typography sx={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: 20,
                    fontWeight: 600,
                    textTransform: "capitalize",
                    textAlign: "center",
                }} gutterBottom component="p">
                Web Design & Development Course for Beginners
                </Typography>
                <Typography
                  component="p"
                  variant="body2"
                >
                  Lorem
                </Typography>
              </CardContent>
            </Card>
    </Box>
    </>
  )
}

export default PopularCourses;