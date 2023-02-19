import React, { useEffect } from 'react'
import { Routes , Route} from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error';
import Add from './Pages/Add/Add';
import Edit from './Pages/Edit/Edit';
import ContactLists from './Pages/ContactsLists/ContactLists';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { useDispatch, useSelector } from 'react-redux';
import { current } from './JS/Actions/user';


function App() {
  const dispatch = useDispatch()
  useEffect (() => {
    if (localStorage.getItem("token")){
      dispatch (current())
    }
  }, [dispatch])
  const isAuth = useSelector(state =>state.userReducer.isAuth)
  return (
    <div className="App">
      <NavBar />
<Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/*" element={<Error/>}/>
        <Route path="/users-lists" element={<ContactLists/>}/>
        <Route path="/Edit/:id" element={<Edit/>}/>
        <Route path="/Add/" element={<Add/>}/>
        {isAuth ? <Route path="/contacts" element={<ContactLists/>}/> : null}
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>

   </div>    
  );
}
export default App