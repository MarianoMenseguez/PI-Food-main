import { Home, Landing, Detail, Form, NotFound, Formdiet } from './views/index.js';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';


function App() {

  
  const location = useLocation();

  return (
    <>
      { location.pathname !== '/' && <NavBar /> }
      <Routes>
        <Route exact path='/' element={<Landing />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/detail/:id' element={<Detail />}/>
        <Route path='/form' element={<Form />}/>
        <Route path='/formdiet' element={<Formdiet />}/>
        <Route path='*' element={<NotFound />}/> 
      </Routes>
    </>
  );
}

export default App;



