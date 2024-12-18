import { createRoot } from 'react-dom/client';
import './index.css';
import {appStarted} from "../shared/config/init.ts";
import {App} from "./application.tsx";


appStarted();

createRoot(document.getElementById('root')!).render(
    <App />
);