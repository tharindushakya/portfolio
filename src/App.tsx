import { Header, Hero, Skills, Projects, Certifications, Contact, Footer } from './components';

function App() {
  return (
    <div className="min-h-screen bg-primary-50 text-primary-900">
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
  );
}

export default App;
