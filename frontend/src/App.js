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
import CaesarFruitLevelOneScreen from './screens/FruitsScreens/CaesarFruitLevelOneScreen';
import SelectionLevelScreen from './screens/SelectionLevelScreen/SelectionLevelScreen'; 
import CaesarFruitLevelTwoScreen from './screens/FruitsScreens/CaesarFruitLevelTwoScreen';
import CaesarVegLevelOneScreen from './screens/VegetablesScreens/CaesarVegLevelOneScreen';
import CaesarVegLevelTwoScreen from './screens/VegetablesScreens/CaesarVegLevelTwoScreen';
import BeaufortFruitLevelOneScreen from './screens/FruitsScreens/BeaufortFruitLevelOneScreen';
import BeaufortFruitLevelTwoScreen from './screens/FruitsScreens/BeaufortFruitLevelTwoScreen';
import BeaufortVegLevelOneScreen from './screens/VegetablesScreens/BeaufortVegLevelOneScreen';
import BeaufortVegLevelTwoScreen from './screens/VegetablesScreens/BeaufortVegLevelTwoScreen';
import VigenereFruitLevelOneScreen from './screens/FruitsScreens/VigenereFruitLevelOneScreen';
import VigenereFruitLevelTwoScreen from './screens/FruitsScreens/VigenereFruitLevelTwoScreen';
import VigenereVegLevelTwoScreen from './screens/VegetablesScreens/VigenereVegLevelTwoScreen';
import VigenereVegLevelOneScreen from './screens/VegetablesScreens/VigenereVegLevelOneScreen';
import ColumnarFruitLevelOneScreen from './screens/FruitsScreens/ColumnarFruitLevelOneScreen';
import ColumnarFruitLevelTwoScreen from './screens/FruitsScreens/ColumnarFruitLevelTwoScreen';
import PublicKeyScreen from './screens/PublicKeyScreen/PublicKeyScreen';
import DiffieHellmanScreen from './screens/PublicKeyScreen/DiffieHellmanScreen';
import DiffieHellmanSimulation from './screens/PublicKeyScreen/DiffieHellmanSimulation';
import FinalQuizFruitsL1 from './screens/FinalQuizScreen/FinalQuizFruitsL1';
import FinalQuizFruitsL2 from './screens/FinalQuizScreen/FinalQuizFruitsL2';
import FinalQuizVegL1 from './screens/FinalQuizScreen/FinalQuizVegL1';
import FinalQuizVegL2 from './screens/FinalQuizScreen/FinalQuizVegL2';
import ColumnScreenQuiz from './screens/ColumnScreen/ColumnScreenQuiz';

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
          <Route path="/column-quiz" element={<> <SideBar/> <ColumnScreenQuiz /> </>} />
          <Route path="/temp-page" element={<> <SideBar/> <IntroductionScreen /> </>} />
          <Route path="/public" element={<> <SideBar/> <PublicKeyScreen/> </>} />
          <Route path="/diffie-hellman-simulation" element={<> <SideBar/> <DiffieHellmanSimulation/> </>} />
          <Route path="/hash" element={<> <SideBar/> </>} />
        
          <Route path="/selection/:category" element={<SelectionLevelScreen />} />
          <Route path="/fruits/caesar/level-1" element={<CaesarFruitLevelOneScreen />} />
          <Route path="/fruits/caesar/level-2" element={<CaesarFruitLevelTwoScreen />} />
          <Route path="/fruits/beaufort/level-1" element={<BeaufortFruitLevelOneScreen />} />
          <Route path="/fruits/beaufort/level-2" element={<BeaufortFruitLevelTwoScreen />} />
          <Route path="/fruits/vigenere/level-1" element={<VigenereFruitLevelOneScreen />} />
          <Route path="/fruits/vigenere/level-2" element={<VigenereFruitLevelTwoScreen />} />
          <Route path="/fruits/columnar/level-1" element={<ColumnarFruitLevelOneScreen />} />
          <Route path="/fruits/columnar/level-2" element={<ColumnarFruitLevelTwoScreen />} />
          <Route path="/vegetables/caesar/level-1" element={<CaesarVegLevelOneScreen />} />
          <Route path="/vegetables/caesar/level-2" element={<CaesarVegLevelTwoScreen />} />
          <Route path="/vegetables/beaufort/level-1" element={<BeaufortVegLevelOneScreen />} />
          <Route path="/vegetables/beaufort/level-2" element={<BeaufortVegLevelTwoScreen />} />
          <Route path="/vegetables/vigenere/level-1" element={<VigenereVegLevelOneScreen />} />
          <Route path="/vegetables/vigenere/level-2" element={<VigenereVegLevelTwoScreen />} />

          <Route path="/fruits/final/level-1" element={<FinalQuizFruitsL1 />} />
          <Route path="/fruits/final/level-2" element={<FinalQuizFruitsL2 />} />
          <Route path="/vegetables/final/level-1" element={<FinalQuizVegL1 />} />
          <Route path="/vegetables/final/level-2" element={<FinalQuizVegL2 />} />

          
        </Routes>
      </Router>
  );
}

export default App;
