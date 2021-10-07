import { FC, useState } from "react";
import LeadGrid from "../LeadGrid/LeadGrid";
import { 
    Typography, 
    FormGroup, 
    FormControlLabel,
    Switch
 } from "@mui/material";
import { IRow } from "../IApiData/IApiData";

interface MainProps {
    rows: IRow[] | null;
    thirdParty: boolean;
    setRows: any; 
    setThirdParty: any;
}



const Main:FC<MainProps> = (props) => {
    const [ checked, setChecked ] = useState(props.thirdParty);

    const handleChange = () => {
        // Toggles the checked and thirdParty states.
        props.setThirdParty((prevState: boolean) => {
            setChecked(!prevState);
            return !prevState;
        })
    }
    return(
        <div style={{paddingBottom: "30px"}}>
          <Typography style={{textAlign: "center", margin: "70px auto"}} variant="h2" gutterBottom>
              LeadEasy Dashboard
          </Typography>
          { props.rows ? <LeadGrid setRows={props.setRows} rows={props.rows}/> : <h2>No Data Found</h2> }
          <FormGroup style={{padding: "20px"}}>
            <FormControlLabel checked={checked} onChange={handleChange} control={<Switch />} label="Use 3rd Party Data." />
          </FormGroup>
        </div>
    );
}

export default Main;