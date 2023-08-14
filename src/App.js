import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Mainpage from './Main-page/Mainpage';
import Signup from './Challanges/Signup/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='*' element={<Mainpage />} />
          <Route exact path='/' element={<Mainpage />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
