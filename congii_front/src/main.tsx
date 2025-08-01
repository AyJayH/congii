import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx'
import WebSocketComponent from './socket.tsx'
import Colorbutton from './button.tsx'
import Front from './front.tsx'
import PageRequest from './PageRequest.tsx'
import PageRequestWrapper from './PageRequestWrapper.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <WebSocketComponent/>
    <Colorbutton/>   */}
    {/* <Front/> */}
    {/* <WebSocketComponent/> */}
    
    
    {/* <Route path="/test" element={<PageRequest />} /> */}
    {/* <PageRequest/> */}

    <BrowserRouter>
      <Routes>
        <Route path="/page/:pageId" element={<PageRequestWrapper />} />
        {/* <Route path="/page/shared" element={<PageRequest page='shared' />} /> */}
        <Route path="/page/shared" element={<PageRequest/>} />
        {/* <Route path="" element={<Front />} /> */}





      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
