import './styles/App.css';
import Intro from './components/UI/intro/Intro';
import Header from './components/UI/header/Header';
import Advant from './components/UI/advant/Advant';
import About from './components/UI/about/About';
import Product from './components/UI/product/Product';
import Service from './components/UI/service/Service';
import FAQ from './components/UI/FAQ/FAQ';
import Footer from './components/UI/footer/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Intro>
          <Header/>
        </Intro>
      </header>
      <main>
        <Advant/>
        <About/>
        <Product/>
        <Service/>
        <FAQ/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
