
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginRegisterMain from './pages/LoginRegisterMain';
import MainBody from './pages/MainBody';
import TwoMinuteGame from './pages/TwoMinuteGame';
import Drawer from './components/DrawerMui';
import DrawerMui from './components/DrawerMui';


function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route exact path='/' element={<MainBody/>}/>
        <Route exact path='/logreg' element={<LoginRegisterMain/>}/>
        <Route exact path='/card' element={<TwoMinuteGame/>}/>
        <Route exact path='/drawer' element={<DrawerMui/>}/>


      </Routes>
    </Router>

    </>
  );
}

export default App;
