import "./App.css";

function App() {
  fetch("https://login.microsoftonline.com/aae3ef1f-88eb-4eea-9993-fe680231f589/oauth2/token", {
    body: "grant_type=client_credentials&client_id=be529fcf-7434-4345-a8aa-3194dcbb1217&resource=be529fcf-7434-4345-a8aa-3194dcbb1217&client_secret=06RG4Zz-4ik-t_g-2Ey2-f735L4n5.qSkK",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
    },
    method: "POST",
    mode: "no-cors",
  });

  return (
    <div className="App">
      <p>test-app</p>
    </div>
  );
}

export default App;

// await fetch("https://login.microsoftonline.com/aae3ef1f-88eb-4eea-9993-fe680231f589/oauth2/token", {
//     "credentials": "omit",
//     "headers": {
//         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0",
//         "Accept": "*/*",
//         "Accept-Language": "en-US,en;q=0.5",
//         "Content-Type": "application/x-www-form-urlencoded",
//         "Access-Control-Allow-Origin": "*",
//         "Sec-Fetch-Dest": "empty",
//         "Sec-Fetch-Mode": "cors",
//         "Sec-Fetch-Site": "cross-site",
//         "Sec-GPC": "1"
//     },
//     "referrer": "http://localhost:3000/",
//     "body": "grant_type=client_credentials&client_id=be529fcf-7434-4345-a8aa-3194dcbb1217&resource=be529fcf-7434-4345-a8aa-3194dcbb1217&client_secret=06RG4Zz-4ik-t_g-2Ey2-f735L4n5.qSkK",
//     "method": "POST",
//     "mode": "cors"
// });
