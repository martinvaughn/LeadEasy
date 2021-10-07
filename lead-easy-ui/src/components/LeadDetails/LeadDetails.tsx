import { FC } from "react";
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';

interface LeadDetailsProps {
    location: {
        state: {
            row: {
                id: number; 
                name: string; 
                email: string; 
                phone: string; 
                status: number; 
                details: string;
            }
        }
    }
}

const LeadDetails:FC<LeadDetailsProps> = (props) => {
    console.log("ID: ", props.location.state.row);
    const row = props.location.state.row;
    return(
        <div style={{backgroundColor: "#EAEEF3"}}>
          <Card sx={{ maxWidth: 600 }} style={{margin: "auto"}} >
            <CardContent>
              <Typography variant="h2" gutterBottom>
                {row.name + " Details"}
              </Typography>
              <hr></hr>
              
            </CardContent>
          </Card>
        </div>
    );
} 

export default LeadDetails;


 function BasicCard() {
    return (
      <Card sx={{ minWidth: 600 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            Words Today
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium">Back to Leads</Button>
        </CardActions>
      </Card>
    );
  }