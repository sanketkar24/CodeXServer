
import './App.css';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
import AddDetails from './Pages/AddDetails';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            
            <Route path="/LogIn" element={<LogIn/>}/>
            
         
            <Route path="/SignUp" element={<SignUp/>}/>
            
       
      </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
