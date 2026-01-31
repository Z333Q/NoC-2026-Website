import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Launchpad from './pages/Launchpad';
import Thesis from './pages/Thesis';
import Team from './pages/Team';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import Apply from './pages/Apply';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="studio" element={<Portfolio />} />
          <Route path="advisory" element={<Launchpad />} />
          <Route path="about" element={<Team />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="launchpad" element={<Launchpad />} />
          <Route path="team" element={<Team />} />
          <Route path="thesis" element={<Thesis />} />
          <Route path="insights" element={<Insights />} />
          <Route path="contact" element={<Contact />} />
          <Route path="apply" element={<Apply />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
