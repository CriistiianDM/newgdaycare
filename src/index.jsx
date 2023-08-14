import * as ReactDOMClient from 'react-dom/client';
import React from 'react';
import RenderApp from './RenderApp';

const rootElement = document.getElementById("root");


{/* <script async defer src="https://apis.google.com/js/api.js" id="gapiLoaded"></script>
<script async defer src="https://accounts.google.com/gsi/client" id="gisLoaded"></script> */}

const script_create = [{
        src: 'https://apis.google.com/js/api.js',
        async: true,
        defer: true,
        id: 'gapiLoaded'
        },
        {
                src: 'https://accounts.google.com/gsi/client',
                async: true,
                defer: true,
                id: 'gisLoaded'
        },
        {
            src: '/assets/_root/sheetsAPIQuickstart.js',
            async: true,
            defer: true,
            id: 'script_sheets_api'
        }
]


let num = 0;
let script_ = null;

script_create.map((script, index) => {
        const script_gapi = document.createElement('script');
        script_gapi.src = script.src;
        script_gapi.async = script.async;
        script_gapi.defer = script.defer;
        script_gapi.id = script.id;

        if (index < 2) {
            document.body.appendChild(script_gapi);

            script_gapi.onload = () => {
                num++;
                if (num >= 2) {
                    const btn_auth = document.querySelector('#btn-actions-google_');
                    btn_auth.classList.remove('_display_none');
                    document.body.appendChild(script_);
                } 
            }

        }
        else {
            script_ = script_gapi;
        }
})


const root = ReactDOMClient.createRoot(rootElement);
root.render(<RenderApp />);