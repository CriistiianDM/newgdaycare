import * as ReactDOMClient from 'react-dom/client';
import React from 'react';
import RenderApp from './RenderApp';

const rootElement = document.getElementById("root");

{/* <script async defer src="https://apis.google.com/js/api.js" id="gapiLoaded"></script>
<script async defer src="https://accounts.google.com/gsi/client" id="gisLoaded"></script>
<script async defer> */}
var script = document.createElement('script');
script.src = 'src/backend/sheetsAPIQuickstart.js';
script.async = true;
script.defer = true;
script.onload = function() {
    console.log("script loaded");
}
document.body.appendChild(script);




const root = ReactDOMClient.createRoot(rootElement);
root.render(<RenderApp />);