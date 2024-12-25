import { createRoot } from 'react-dom/client';
import './index.css';
import { appStarted } from './shared/config/init';
import { App } from './App';

appStarted()
// console.log(document.getElementById())
createRoot(document.getElementById('root')).render(
    <App />
);