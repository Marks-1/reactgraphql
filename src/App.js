import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import MainHeader from "./components/MainHeader";
import MainSection from "./components/MainSection";


function App() {
  return (
    <div className="App container">
      <Header/>
      <MainHeader/>
      <Main/>
      <MainSection/>
      <Footer/>
    </div>
  );
}

export default App;
