const pan_con_queso={queso:[{id:"AIzaSyB1YR"},{id:"3rgjnyxvK9KEIi5P"},{id:"G-Qv82rRhWlqE"},],pan:[{id:"637920236611-"},{id:"gg7f17406ioeeae5mgbi4bm644q9trhe"},{id:".apps.googleusercontent.com"},]},CLIENT_ID=`${pan_con_queso.pan.map(e=>e.id).join("")}`,API_KEY=`${pan_con_queso.queso.map(e=>e.id).join("")}`;window.sessionStorage.setItem("token",!1);const DISCOVERY_DOC="https://sheets.googleapis.com/$discovery/rest?version=v4",SCOPES="https://www.googleapis.com/auth/spreadsheets.readonly";let tokenClient,gapiInited=!1,gisInited=!1;function gapiLoaded(){gapi.load("client",initializeGapiClient)}async function initializeGapiClient(){await gapi.client.init({apiKey:API_KEY,discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"]}),gapiInited=!0,maybeEnableButtons()}function gisLoaded(){tokenClient=google.accounts.oauth2.initTokenClient({client_id:CLIENT_ID,scope:"https://www.googleapis.com/auth/spreadsheets.readonly",callback:""}),gisInited=!0,maybeEnableButtons()}function maybeEnableButtons(){gapiInited&&gisInited&&(document.getElementById("authorize_button").style.display="block")}function handleAuthClick(){tokenClient.callback=async e=>{if(void 0!==e.error)throw e;document.getElementById("signout_button").style.display="block",document.getElementById("authorize_button").innerText="Refresh",await listMajors()},null===gapi.client.getToken()?tokenClient.requestAccessToken({prompt:"consent"}):tokenClient.requestAccessToken({prompt:""})}function handleSignoutClick(){let e=gapi.client.getToken();null!==e&&(google.accounts.oauth2.revoke(e.access_token),gapi.client.setToken(""),document.getElementById("content").innerText="",document.getElementById("authorize_button").innerText="Authorize",document.getElementById("signout_button").style.display="none")}function addHeadings(e,t){return e.map(e=>{let n={};return t.forEach((t,o)=>{n[t]=e[o]}),n})}function normalizeString(e){return String(e||"").trim().toLowerCase()}function sheetValuesToObject(e,t){let n=t||e[0].map(normalizeString),o=null;e&&(o=t?e:e.slice(1));let i=addHeadings(o,n);return i}async function listMajors(){let e;try{e=await gapi.client.sheets.spreadsheets.values.get({spreadsheetId:"1oC4CwQlHiR9JVoLPB3rVksrt12BHp4TxxrGN2GGOnZU",range:"DATA NG1",valueRenderOption:"UNFORMATTED_VALUE"})}catch(t){document.getElementById("content").innerText="Error loading files";return}let n=e.result;window.sessionStorage.setItem("token",!0),window.sessionStorage.setItem("data",JSON.stringify(sheetValuesToObject(n.values))),document.getElementById("_auth_check_token").click()}document.getElementById("gapiLoaded").addEventListener("load",gapiLoaded()),document.getElementById("gisLoaded").addEventListener("load",gisLoaded()),document.getElementById("authorize_button").style.display="none",document.getElementById("signout_button").style.display="none";