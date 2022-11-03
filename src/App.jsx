import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Pages } from './routes/Routes'

function App() {
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
