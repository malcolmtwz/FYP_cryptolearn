import './App.css';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import HomeScreen from './screens/HomeScreen/HomeScreen';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
