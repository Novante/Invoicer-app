import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
      <BrowserRouter>
        <div>
          <Routes>
              <Route path="/" element={<Homepage/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
