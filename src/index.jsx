import * as ReactDOMClient from 'react-dom/client';
import React from 'react';
import RenderApp from './RenderApp';

const rootElement = document.getElementById("root");

var script = document.createElement('script');
script.src = '/assets/_root/sheetsAPIQuickstart.js';
script.async = true;
script.defer = true;
document.body.appendChild(script);


const root = ReactDOMClient.createRoot(rootElement);
root.render(<RenderApp />);