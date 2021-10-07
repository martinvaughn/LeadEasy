import { FC } from "react";
import { Link } from "react-router-dom";
import LeadGrid from "../LeadGrid/LeadGrid";

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
        <>
        <h1>LeadEasy</h1>
        { props.rows ? <LeadGrid setRows={props.setRows} rows={props.rows}/> : null }
        </>
    );
}

export default Main;