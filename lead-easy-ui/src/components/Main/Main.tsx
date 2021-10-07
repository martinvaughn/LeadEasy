import { FC } from "react";
import { Link } from "react-router-dom";
import LeadGrid from "../LeadGrid/LeadGrid";
import { Typography } from "@mui/material";

interface MainProps {
    rows: { 
        id: number; 
        name: string; 
        email: string; 
        phone: string; 
        status: string; 
        details: string; }[] 
        | null;
    
    setRows: any; 
}

const Main:FC<MainProps> = (props: any) => {
    console.log("Data updated in Main: ", props.rows);
    return(
        <div style={{paddingBottom: "30px"}}>
          <Typography style={{textAlign: "center", margin: "70px auto"}} variant="h2" gutterBottom>LeadEasy Dashboard</Typography>
          { props.rows ? <LeadGrid setRows={props.setRows} rows={props.rows}/> : <h2>No Data Found</h2> }
        </div>
    );
}

export default Main;