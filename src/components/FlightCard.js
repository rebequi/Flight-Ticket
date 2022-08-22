import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const FlightCard = () => {
  return (
    <Card sx={{ maxWidth: 700, borderRadius:'20px', backgroundColor:'#F9F6FF' }}>
      <CardActionArea>
        <CardContent>
          <Box sx={{
          display: 'flex', justifyContent: 'space-between'}}>
                <Box>
                    <Typography gutterBottom variant="h5" component="div">
                        San Jose
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <FlightTakeoffIcon />
                    </Typography>
                </Box>
                <Box>
                    <Typography gutterBottom variant="h5" component="div">
                    <FiberManualRecordIcon sx={{
                        fontSize: `10px`
                    }}/>
                    --------------------------------------
                    <FiberManualRecordIcon sx={{
                        fontSize: `10px`
                    }}/>
                    </Typography>
                </Box>
                <Box>
                    <Typography gutterBottom variant="h5" component="div">
                        Miami
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        <FlightLandIcon />
                    </Typography>
                </Box>
          </Box>

          <Typography variant="body2" color="text.secondary">
            Departure: Thursday, August 25th, 2022
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Flight Number: 54765A
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          Make a reservation of this ticket
        </Button>
      </CardActions>
    </Card>
  );
};

export default FlightCard;
