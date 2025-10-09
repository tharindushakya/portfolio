import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ReactGA from "react-ga4";

ReactGA.initialize("G-X01QEJ7RJC");
ReactGA.send("pageview");

createRoot(document.getElementById('root')!).render(<App />)
