// const API_ROOT = "https://localhost:44366/";
// const END_POINT = "/api/leads";


const THIRD_PARTY_URL = "https://randommer.io/api/Name?nameType=fullname&quantity=20";
const TOKEN = "ccbf82b05c494db9ace925cf81486f91";

const apiWrapper = (setApiData: Function, setResolved: Function, thirdParty: boolean) => {
    let count = 0;
    if (thirdParty) {
        callThirdPartyApi();
    } else {
        callLocalApi(); // If I were to get my SQL Server connection up & running, then this would make a call there.
    }

    async function callLocalApi() {
        const rows = [
            { id: 1, name: 'Abby McGrath', email: 'abbymcg@gmail.com', phone: "480-567-5694", status: "Interested", notes: "She's pretty neat."},
            { id: 2, name: 'Martin Vaughn', email: 'martinvaughn@gmail.com',phone: "480-566-5679", status: "Dropped", 
              notes: "He's just been vibing for a while. Not sure if he's actually interested or what. But he would like us to follow up sometime in the future if we get a chance. "}
          ];
          setApiData({rows: rows});
          setResolved(true);
    }

    async function callThirdPartyApi() {   
        await fetch(THIRD_PARTY_URL, {
            method: "GET",
            headers: {
              "X-Api-Key": TOKEN
            }
          })
        .then(response => response.json())
        .then(data => {
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
        }).catch(e => {console.log("Error calling API: ", e)});
      }
}

export default apiWrapper;