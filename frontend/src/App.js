import './App.css';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import NotesScreen from './screens/NotesScreen/NotesScreen';
import GameScreen from './screens/GameScreen/GameScreen';
import AboutScreen from './screens/AboutScreen/AboutScreen';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/notes" element={<NotesScreen />}/>
          <Route path="/game" element={<NotesScreen />}/>
          <Route path="/aboutus" element={<NotesScreen />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
