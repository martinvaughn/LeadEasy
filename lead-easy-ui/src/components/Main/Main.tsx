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

}

const Main:FC<MainProps> = (props) => {
    return(
        <>
        <h1>LeadEasy</h1>
        { props.rows ? <LeadGrid rows={props.rows}/> : null }
        <Link to={{ pathname: "/lead/1", state: { rows: props.rows, id: 1 }}}> Link Up</Link>
        </>
    );
}

export default Main;