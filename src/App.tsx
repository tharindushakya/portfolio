import { Header, Hero, Skills, Projects, Certifications, Contact, Footer } from './components';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
        <Header />
        <main>
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
