import { Card, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { instructorsInfo } from './About/cardsInfor'
import Heading from './Heading'

const Instructors = () => {
  return (
    <>
    <Heading title="Expert Instructors" sm_title="INSTRUCTORS" />

    <Box>
        <Card>
         { instructorsInfo.map((item) => {
            return (
                <>
            <CardContent key={item.id}>
                <Typography sx={{objectFit: "cover", width: "200px", height: "200px"}} component="img" src={item.img} alt="instructor"/>
                <Typography component="div">
                    <Typography component="span">
                            {item.facebook}
                    </Typography>
                    <Typography component="span">
                            {item.twitter}
                    </Typography>
                    <Typography component="span">
                            {item.insta}
                    </Typography>
                </Typography>
                <Typography component="div">
                    <Typography component="p">
                        {}
                    </Typography>
                    <Typography component="p">
                        {}
                    </Typography>
                </Typography>
            </CardContent>
                </>
            )
         })}
        </Card>
    </Box>
    </>
  )
}

export default Instructors