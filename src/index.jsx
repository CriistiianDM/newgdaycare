import * as ReactDOMClient from 'react-dom/client';
import React from 'react';
import RenderApp from './RenderApp';
import dotenv from 'dotenv';
dotenv.config();


window.apiKey =  process.env.REACT_APP_PASTEL;
window.apiSecret = process.env.REACT_APP_PASTEL_SABOR_COCO;

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
root.render(<RenderApp />);