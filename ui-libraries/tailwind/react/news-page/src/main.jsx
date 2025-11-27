import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import First from "./pages/First.jsx";
import Layout from "./pages/Layout.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
        <First />
    </Layout>
  </StrictMode>,
)
