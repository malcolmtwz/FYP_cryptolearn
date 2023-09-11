import './App.css';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import NotesScreen from './screens/NotesScreen/NotesScreen';
import GameScreen from './screens/GameScreen/GameScreen';
import AboutScreen from './screens/AboutScreen/AboutScreen';
import CaesarScreen from './screens/CaesarScreen/CaesarScreen';
import CaesarScreen2 from './screens/CaesarScreen2/CaesarScreen2';
import CaesarScreen3 from './screens/CaesarScreen3/CaesarScreen3';
import IntroductionScreen from './screens/IntroductionScreen/IntroductionScreen';
import BeaufortScreen from './screens/BeaufortScreen/BeaufortScreen';
import VigenereScreen from './screens/VigenereScreen/VigenereScreen';
import ColumnScreen from './screens/ColumnScreen/ColumnScreen';
import BeaufortScreen2 from './screens/BeaufortScreen2/BeaufortScreen2';
import BeaufortScreen3 from './screens/BeaufortScreen3/BeaufortScreen3';
import VigenereScreen2 from './screens/VigenereScreen2/VigenereScreen2';
import VigenereScreen3 from './screens/VigenereScreen3/VigenereScreen3';
import CaesarQuizOneScreen from './screens/CaesarQuizOneScreen/CaesarQuizOneScreen';

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
          <Route path="/caesar2" element={<> <SideBar/> <CaesarScreen2 /> </>} />
          <Route path="/caesar3" element={<> <SideBar/> <CaesarScreen3 /> </>} />
          <Route path="/intro" element={<> <SideBar/> <IntroductionScreen /> </>} />
          <Route path="/beaufort" element={<> <SideBar/> <BeaufortScreen /> </>} />
          <Route path="/beaufort2" element={<> <SideBar/> <BeaufortScreen2 /> </>} />
          <Route path="/beaufort3" element={<> <SideBar/> <BeaufortScreen3 /> </>} />
          <Route path="/vig" element={<> <SideBar/> <VigenereScreen /> </>} />
          <Route path="/vig2" element={<> <SideBar/> <VigenereScreen2 /> </>} />
          <Route path="/vig3" element={<> <SideBar/> <VigenereScreen3 /> </>} />
          <Route path="/column" element={<> <SideBar/> <ColumnScreen /> </>} />
          <Route path="/temp-page" element={<> <SideBar/> <IntroductionScreen /> </>} />
          <Route path="/caesar-quiz-1" element={<CaesarQuizOneScreen/>} />
        </Routes>
      </Router>
  );
}

export default App;
