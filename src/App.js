import './App.css';
import Login from './Components/login';
import Register from './Components/Register';
import Main from './Components/Main';
import Navbar from "./Components/Navbar";

import{
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Posts from './Components/posts';

function App() {

  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
    <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
