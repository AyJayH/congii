import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import WebSocketComponent from './socket.tsx'
import Colorbutton from './button.tsx'
import Front from './front.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <WebSocketComponent/>
    <Colorbutton/>   */}
    {/* <Front/> */}
    <WebSocketComponent/>

  </StrictMode>,
)
