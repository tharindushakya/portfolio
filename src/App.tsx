import { Header, Hero, Footer, Skills, Projects, Certifications, Contact } from './components';
import { ThemeProvider } from './contexts/ThemeContext';
import { useEffect } from "react";
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize("G-XXXXXXXXXX"); // Replace with your real Measurement ID

    // Send initial pageview when the app loads
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  }, []);

  return (
    <ThemeProvider>
      <div
        className="min-h-screen transition-colors duration-300 layered z-background bg-dynamic"
        style={{ color: 'var(--text-primary)' }}
      >
        <Header />
        <main className="layered z-content">
          <Hero />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
