import {AppContextProvider} from "./AppContext"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from './pages/Home/Home'
import Browse from './pages/Browse/Browse'
import Post from './pages/Post/Post'
import PostSuccess from './pages/Post/PostSuccess'
import Search from './pages/Search/Search'
import Login from './pages/Login/Login'
import Success from './pages/Login/Success'

function App() {

  return (
    <>
    <AppContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/browse" element={<><Browse/><Footer/></>}/>
        <Route path="/post" element={<><Post/><Footer/></>}/>
        <Route path="/postsuccess" element={<><PostSuccess/><Footer/></>}/>
        <Route path='/search' element={<><Search/><Footer/></>}/>
        <Route path='/login' element={<><Login/><Footer/></>}/>
        <Route path='/profile' element={<><Success/><Footer/></>}/>
      </Routes>
      </BrowserRouter>
    </AppContextProvider>
    </>
  );
}

export default App;
