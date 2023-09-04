
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginRegisterMain from './pages/LoginRegisterMain';
import MainBody from './pages/MainBody';
import TwoMinuteGame from './pages/TwoMinuteGame';
import DrawerMui from './components/DrawerMui';
import AdminHomePage from './adminPanel/AdminHomePage';
import AdminTwoMinutePanel from './adminPanel/AdminTwoMinutePanel';
import SocketFile from './pages/SocketFile';
import LandingPage from './pages/LandingPage';
import LandingRahulPages from './pages/LandingRahulPages';


function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route exact path='/' element={<MainBody/>}/>
        <Route exact path='/logreg' element={<LoginRegisterMain/>}/>
        <Route exact path='/card' element={<TwoMinuteGame/>}/>
        <Route exact path='/drawer' element={<DrawerMui/>}/>
        <Route exact path='/admin' element={<AdminHomePage/>}/>
        <Route exact path='/adminTwo' element={<AdminTwoMinutePanel/>}/> 

      {/* <Route exact path='/socket' element={<SocketFile/>}/> */}
        <Route exact path='/land' element={<LandingPage/>}/>
        <Route exact path='/landR' element={<LandingRahulPages/>}/>




      </Routes>
    </Router>

    </>
  );
}

export default App;
