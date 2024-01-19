import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './components/index';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import Login from './components/login';
import LoginImpExp from './components/importer_login';
import LoginFF from './components/freight_login';
import LoginOwner from './components/owner';
import Register from './components/registration';
import Chatbot from './components/chatbot';
import ClientRegister from './components/client_reg';
import FFRegister from './components/ff_reg';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Index/>}/>
          <Route path='/about' element={ <About/>}/>
          <Route path='/services' element={ <Services/>}/>
          <Route path='/contact' element={ <Contact/>}/>
          <Route path='/login' element={ <Login/>}/>
          <Route path='/login/importer-exporter' element={ <LoginImpExp/>}/>
          <Route path='/login/freightForwarder' element={ <LoginFF/>}/>
          <Route path='/login/owner' element={ <LoginOwner/>}/>
          <Route path='/register' element={ <Register/>}/>
          <Route path='/register/client' element={ <ClientRegister/>}/>
          <Route path='/register/ff' element={ <FFRegister/>}/>
          <Route path='/chatbot' element={ <Chatbot/>}/>
          
        </Routes>
      </BrowserRouter>
      {/* <Chatbot/> */}
    </div>
  );
}


export default App;
