
const pan_con_queso = {
    "queso": [
        { id: "AIzaSyB1YR" },
        { id: "3rgjnyxvK9KEIi5P" },
        { id: "G-Qv82rRhWlqE" }
    ],
    "pan": [
        { id: "637920236611-" },
        { id: "gg7f17406ioeeae5mgbi4bm644q9trhe" },
        { id: ".apps.googleusercontent.com" }
    ]
}

const CLIENT_ID = `${(pan_con_queso.pan).map((item) => item.id).join('')}`;
const API_KEY = `${(pan_con_queso.queso).map((item) => item.id).join('')}`;

if ((window.sessionStorage.getItem('token') === false)) {
    //crear variable en session storage para guardar el token
    window.sessionStorage.setItem('token', false);
    console.log('token creado');
}

// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';

let tokenClient;
let gapiInited = false;
let gisInited = false;



document.getElementById('gapiLoaded').addEventListener('load', gapiLoaded());
document.getElementById('gisLoaded').addEventListener('load', gisLoaded());


// document.getElementById('authorize_button').onclick = handleAuthClick;
// document.getElementById('signout_button').onclick = handleSignoutClick;
document.getElementById('authorize_button').style.display = 'none';
document.getElementById('signout_button').style.display = 'none';

/**
 * Callback after api.js is loaded.
 */
function gapiLoaded() {
  gapi.load('client', initializeGapiClient);
}

/**
 * Callback after the API client is loaded. Loads the
 * discovery doc to initialize the API.
 */
async function initializeGapiClient() {
  await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: [DISCOVERY_DOC],
  });
  gapiInited = true;
  maybeEnableButtons();
}

/**
 * Callback after Google Identity Services are loaded.
 */
function gisLoaded() {
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: '', // defined later
  });
  gisInited = true;
  maybeEnableButtons();
}

/**
 * Enables user interaction after all libraries are loaded.
 */
function maybeEnableButtons() {
  if (gapiInited && gisInited) {
    document.getElementById('authorize_button').style.display = 'block';
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick() {
  tokenClient.callback = async (resp) => {
    if (resp.error !== undefined) {
      throw (resp);
    }
    document.getElementById('signout_button').style.display = 'block';
    document.getElementById('authorize_button').innerText = 'Refresh';
    await listMajors();
  };

  if (gapi.client.getToken() === null) {
    // Prompt the user to select a Google Account and ask for consent to share their data
    // when establishing a new session.
    tokenClient.requestAccessToken({prompt: 'consent'});
  } else {
    // Skip display of account chooser and consent dialog for an existing session.
    tokenClient.requestAccessToken({prompt: ''});
  }

}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick() {
  const token = gapi.client.getToken();
  if (token !== null) {
    google.accounts.oauth2.revoke(token.access_token);
    gapi.client.setToken('');
    document.getElementById('content').innerText = '';
    document.getElementById('authorize_button').innerText = 'Authorize';
    document.getElementById('signout_button').style.display = 'none';
  }
}


function addHeadings(people, headings) {
    return people.map(personAsArray => {
      const personAsObj = {};
  
      headings.forEach((heading, i) => {
        personAsObj[heading] = personAsArray[i];
      });
  
      return personAsObj;
    });
}

function normalizeString(value) {
    return String(value || '')
      .trim()
      .toLowerCase();
}

function sheetValuesToObject(sheetValues, headers) {
    const headings = headers || sheetValues[0].map(normalizeString);
    let people = null;
    if (sheetValues) people = headers ? sheetValues : sheetValues.slice(1);
    const peopleWithHeadings = addHeadings(people, headings);
    return peopleWithHeadings;
}

async function listMajors() {
  let response;
  try {
    // Fetch first 10 files
    response = await gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '1oC4CwQlHiR9JVoLPB3rVksrt12BHp4TxxrGN2GGOnZU',
      range: 'DATA NG1',
      valueRenderOption: 'UNFORMATTED_VALUE',
    });
  } catch (err) {
    document.getElementById('content').innerText = 'Error loading files';
    return;
  }
  const range = response.result;

   window.sessionStorage.setItem('token', true);
   window.sessionStorage.setItem('data', JSON.stringify(sheetValuesToObject(range.values)));
   document.getElementById('_auth_check_token').click();
  console.log('ummm ya');
}


