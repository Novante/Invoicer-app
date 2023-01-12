import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from "./pages/Homepage/Homepage";
import {useEffect, useState} from "react";
import {fetchCustomers} from "./utils/fetch";

function App() {

    const [customers, setCustomers] = useState(null)

    useEffect(() => {
        fetchCustomers().then(res => setCustomers(res))
    }, [])

    useEffect(() => {
        if (customers !== null){
            console.log(customers);
        }
    },[customers])

  return (
      <BrowserRouter>
        <div>
          <Routes>
              <Route path="/" element={<Homepage customers={customers}/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
