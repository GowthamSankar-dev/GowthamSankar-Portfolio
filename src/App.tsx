import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import { Home } from './pages/Home';
import { ProjectCaseStudy } from './pages/ProjectCaseStudy';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectCaseStudy />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
