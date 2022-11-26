import Button from '@mui/material/Button';
import Navbar from './components/Navbar.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.tsx'
import Browse from './pages/Home/Browse.tsx'
import Search from './pages/Home/Search.tsx'

export default function MyApp() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
