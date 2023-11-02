import Navbar from './Navbar/Navbar';
import PasswordInput from './PasswordInput/PasswordInput';
import './App.css';
import Sign_Up from './Sign_Up/Sign_Up';
import Login from './Login/Login';
// import Sign_Up from './Sign_Up/Sign_Up';
import Country from './Country_Code/country';
import Register from './Registration_Form/register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
<div className="">
      
 {/* <Navbar/> 
 <Register/> */}

<Router>
<Navbar />
{/* <Register/> */}
      <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
{/* <Sign_Up /> */}
{/* <Login /> */}
 {/* <Navbar/>  */}
 
{/* <Sign_Up/>  */}
{/* <PasswordInput/> */}

{/* <Country/> */}

{/* pak */}
</div>



  );
}

export default App;
