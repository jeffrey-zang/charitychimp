import Navbar from './components/Navbar.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.tsx'
import Browse from './pages/Browse/Browse.tsx'
import Search from './pages/Search/Search.tsx'
import Post from './pages/Post/Post.tsx'

export default function MyApp() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/post" element={<Post />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
