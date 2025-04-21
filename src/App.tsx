import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import {User} from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/user/:id" element={<User />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
