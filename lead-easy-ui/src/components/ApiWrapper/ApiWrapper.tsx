import { IApiData } from "../IApiData/IApiData";
import { Link } from "react-router-dom";

const API_ROOT = "http://127.0.0.1:8000";
const END_POINT = "/api/retrieve_reports";

  const rows = [
      { id: 1, name: 'Abby McGrath', email: 'martinvaughn@gmail.com', phone: "480-567-5694", status: "Interested", notes: "She's super cool and fun and funny and really cute too."},
      { id: 2, 
        name: 'Martin Vaughn', 
        email: 'martinvaughn@gmail.com',
         phone: "480-566-5679", 
         status: "Dropped", 
         notes: "He's just been vibing for a while. Not sure if he's actually interested or what. But he would like us to follow up sometime in the future if we get a chance. "}
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