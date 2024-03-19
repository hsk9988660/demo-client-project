import React from 'react';
import { Card, CardContent, Typography, Box, Checkbox, Button } from '@mui/material';

const CenteredCard = () => {

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '90vh',
        
      }}
    >
      <Card sx={{width: "400px"}}>
        <CardContent sx={{color: "#1F2128", mx: "10px", mt: "10px"}}>
          <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #CDCDCD",  fontSize: "14px", pb: 1}}>
          <Typography>
            All pages
          </Typography>
          <Checkbox {...label} sx={{
        borderRadius: '30px',
        '& .MuiSvgIcon-root': {
          borderRadius: '50%',
        },
      }}/>
          </Box>
          <Box sx={{display: "flex",alignItems: "center", justifyContent: "space-between", my: 3,  fontSize: "14px"}}>
          <Typography>
            Page 1
          </Typography>
          <Checkbox {...label} />
          </Box>
          <Box sx={{display: "flex",alignItems: "center", justifyContent: "space-between",  my: 3,  fontSize: "14px"}}>
          <Typography>
            Page 2
          </Typography>
          <Checkbox {...label} />
          </Box>
          <Box sx={{display: "flex",alignItems: "center", justifyContent: "space-between",  my: 3,  fontSize: "14px"}}>
          <Typography>
            Page 3
          </Typography>
          <Checkbox {...label} />
          </Box>
          <Box sx={{display: "flex",alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #CDCDCD", pb: 1,  fontSize: "14px"}}>
          <Typography>
            Page 4
          </Typography>
          <Checkbox {...label} />
          </Box>
          <Box mt={2}>
            <Button sx={{borderRadius: "10px", padding: "10px", background: "#FFCE22", width: "100%", color: "black",  fontSize: "14px"}}>Done</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CenteredCard;
