import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import MenuBar from './components/Menubar/MenuBar';

function App() {
  return (
    <div >
      <MenuBar></MenuBar>
      <Routes>
        <Route path='/home'  element={<Home></Home>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
