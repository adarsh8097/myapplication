import logo from './logo.svg';
import './App.css';
import {  Route, Router, Routes } from 'react-router-dom';
import SignUp from './Component/SignUp';
import SignIn from './Component/SignIn/Sign';
import HomePage from './Component/Home/Homepage';
import Item from './Component/Item/Item';
import ItemDetail from './Component/Item/SingleItem.js/ItemDetail';
import ConpanyInf from './Component/Conpany/Companyinfo';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        {/* <h1 className='text-3xl font-bold text-red-400'>This is new reactjs application</h1> */}
       
          <Routes>
            <Route  path='/' element={<SignUp/>}/>
            <Route path='/login' element={<SignIn/>}/>
            <Route path='/Home' element={<HomePage/>}/>
            <Route path='/Item' element={<Item/>}/>
            <Route path='/Item/:id' element={<ItemDetail/>}/>
            <Route path='/Company'element={<ConpanyInf/>}/>
          </Routes>
     
      </div>
    </div>
  );
}

export default App;
