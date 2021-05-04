import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Skills from '../components/Skills';

function Home() {
  return (
    <div className="App">
      <Header />
        <Hero />
        <Skills />
      <Footer />
    </div>
  );
}

export default Home;