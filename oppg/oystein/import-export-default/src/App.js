/*
 * App.js
 * File ID: 5b7bed1e-eb16-11ec-b8c6-a16175638d0b
 */

import logo from './logo.svg';
import './App.css';
import Header from './pages/landingPage/Header';
import { paragraphOne, paragraphTwo, paragraphThree }
       from './pages/landingPage/Contents';

function App() {
  return (
    <div className="App">
      <Header />
      <p>{paragraphOne}</p>
      <p>{paragraphTwo}</p>
      <p>{paragraphThree()}</p>
    </div>
  );
}

export default App;
