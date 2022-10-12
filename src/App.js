import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Page from './views/Page';
import Criteria from './views/Criteria';
import Variable from './views/Variable';
function App() {
  const [stkData, setStkData] = useState([]);
  useEffect(()=>{
    Axios.get('https://stockdataanalysisapi.herokuapp.com/data').then((res)=>{
      setStkData(res.data);
    })
  },[]);
  return (
    <div className="">
      <Router>
      {(
        <Routes>
          <Route path="/" element={<Page stkData={stkData} />} />
          <Route path="/:stkId" element={<Criteria stkData={stkData} />} />
          <Route
            path="/page/:stkId/:criteriaId/:varId"
            element={<Variable stkData={stkData} />}
          />
        </Routes>
      ) 
      }
    </Router>
    </div>
  );
}

export default App;
