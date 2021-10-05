import { FC } from "react";

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
    return(<h1>{row.name}</h1>);
} 

export default LeadDetails;