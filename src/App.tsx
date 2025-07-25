import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NGOs from './pages/NGOs';
import About from './pages/About';
import Contact from './pages/Contact';
import RegisterNGO from './pages/RegisterNGO';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ngos" element={<NGOs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register-ngo" element={<RegisterNGO />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;