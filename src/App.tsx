import { Header, Hero, Footer, Skills, Projects, Certifications, Contact } from './components';
import { ThemeProvider } from './contexts/ThemeContext';

// All sections imported eagerly (lazy loading removed)

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 layered z-background bg-dynamic" style={{ color: 'var(--text-primary)' }}>
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
