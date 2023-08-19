import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Mainpage from './Main-page/Mainpage';
import Signup from './Challanges/001_Signup/Signup';
import CreditCardCheckout from './Challanges/002_CreditCardCheckout/CreditCardCheckout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='*' element={<Mainpage />} />
          <Route exact path='/' element={<Mainpage />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/credit-card-checkout' element={<CreditCardCheckout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
