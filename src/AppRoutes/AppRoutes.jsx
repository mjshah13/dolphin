import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import DolphinNFT from '../Pages/DolphinNFT/DolphinNFT';

function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/dolphinNFT' element={<DolphinNFT/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;
