import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useHotjar from "react-use-hotjar";
import { Pages } from './routes/Routes'

function App() {
  const { initHotjar, stateChange } = useHotjar();
  useEffect(() => {
    initHotjar(3234092, 6, false);
  }, [initHotjar]);
  useEffect(() => {
    stateChange(window.location.pathname, true);
  }, [stateChange]);
  return (
    <BrowserRouter>
        <main>
            <Routes>
              { Pages.map((route, i) => {
                  return <Route key={ i } path={ route.link } element={ route.component } />
              }) }
            </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;
