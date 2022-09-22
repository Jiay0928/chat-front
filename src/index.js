import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
const appElement = document.getElementById('root');
const root = createRoot(appElement); // createRoot(container!) if you use TypeScript
root.render(<App />);