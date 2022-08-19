import './App.css';
import {BrowserRouter as Router, Route,  Routes} from 'react-router-dom';

import Layout from "./components/UI/Layout";
import Home from "./components/Home"
import About from "./components/About"


export default function App() {
  return (
    <Router>
      <Layout>
     
       

        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      

        {/* <h1>Hello world </h1> */}
      </Layout>
    </Router>
  )
};
