import { IApiData } from "../IApiData/IApiData";
import { Link } from "react-router-dom";

const API_ROOT = "http://127.0.0.1:8000";
const END_POINT = "/api/retrieve_reports";

  const rows = [
      { id: 1, name: 'Bro', email: 'm@gmail.com', phone: "480-56", status: "Yes", details:"He extra."},
      { id: 2, 
        name: 'YeehAw', 
        email: 'ma@gmail.com',
         phone: "480-56", 
         status: "Stop", 
         details: <Link to={{ pathname: "/lead/1", state: { name: "yee", email: "m@g.com", id: 1 }}}> Link Up</Link>}
    ];


const apiWrapper = (setApiData: Function, setResolved: Function) => {
    setApiData({rows: rows});
    setResolved(true);

    async function callApi() {   
        // Fills the apiData state.
        await fetch(API_ROOT + END_POINT)
        .then(response => response.json())
        .then(data => {
            // Map status to a word.
            setResolved(true);
            setApiData(data.data);
        }).catch(e => {console.log("Error calling API: ", e)});
      }

    return (
        {rows: rows}
    );
}

export default apiWrapper;