import './App.css';
import firebase from './firebase'
import Navbar from './Components/Navbar/Navbar.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Components/Footer/Footer';

function App() {
  const db = firebase.firestore()

  return (
    <div className="App">
      <Navbar />
      <p className = "BH-Banner">My-Beer-Hub coming soon!</p>
      <img src = "home-page-beer-river-1500x630.jpg"></img>
      <Footer />
    </div>
  );
}

export default App;
