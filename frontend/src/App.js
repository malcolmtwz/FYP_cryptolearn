import './App.css';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import NotesScreen from './screens/NotesScreen/NotesScreen';
import GameScreen from './screens/GameScreen/GameScreen';
import AboutScreen from './screens/AboutScreen/AboutScreen';
import CaesarScreen from './screens/CaesarScreen/CaesarScreen';

function App() {
  return (
      <Router>
        <div className='App'></div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/notes" element={<> <SideBar/> <NotesScreen /> </>}/>
          <Route path="/aboutus" element={<AboutScreen />}/>
          <Route path="/game" element={<GameScreen />}/>
          <Route path="/caesar" element={<> <SideBar/> <CaesarScreen /> </>} />
        </Routes>
      </Router>
  );
}

export default App;
