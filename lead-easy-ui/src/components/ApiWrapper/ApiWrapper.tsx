import { IApiData, IRow } from "../IApiData/IApiData";
import { Link } from "react-router-dom";

const API_ROOT = "http://127.0.0.1:8000";
const END_POINT = "/api/retrieve_reports";

const THIRD_PARTY_URL = "https://randommer.io/api/Name?nameType=fullname&quantity=200";
const TOKEN = "ccbf82b05c494db9ace925cf81486f91";


const apiWrapper = (setApiData: Function, setResolved: Function) => {
    let count = 0;
    callApi();
    console.log("API called :-) ");
    // setApiData({rows: rows});
    // setResolved(true);

    async function callApi() {   
        await fetch(THIRD_PARTY_URL, {
            method: "GET",
            headers: {
              "X-Api-Key": TOKEN
            }
          })
        .then(response => response.json())
        .then(data => {
            console.log("data created");
            console.log(data);
            let newData = data.map((i: string) => {
                count++;
                return {
                    name: i,
                    id: count,
                    email: "dummy-email@gmail.com",
                    phone: "480-678-3849",
                    status: "Interested",
                    notes: "They would like to get more information about our services." +
                    " However he won't be available till early June. Give them a call in the summer"
                }
            });
            setApiData({rows: newData});
            setResolved(true);
            // console.log("New data mapped: ", )
            // newData.map((row: IRow)=> {
            //     row.id = count;
            //     count++;
            //     row.email = "dummy-email@gmail.com";
            //     row.phone = "480-678-3849";
            //     row.status = "Interested";
            //     row.notes = "They would like to get more information about our services." +
            //     " However he won't be available till early June. Give them a call in the summer";
            // })
            
        }).catch(e => {console.log("Error calling API: ", e)});
      }
}

export default apiWrapper;