
import './App.css';
import Intro from './componen/Intro';
import NavigationBar from './componen/NavigationsBar';
import Page from './componen/Page';
import "./style/Landingpage.css"
import { BrowserRouter,Routes, Route } from 'react-router-dom';


function App() {
  return (
      <div className="myBG">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='page' element={<Page/>}/> 
          <Route path='/' element={<Intro/>}/>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
