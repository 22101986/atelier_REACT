import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Dog from './components/Dog/Dog';

function App() {
  const dogs = [
    ["medor", "male", "5"],
    ["kiki", "male", "2"],
    ["bully", "female", "10"]
  ];


  return (
    <div>
      <Header />
    <main className="container my-5">
      {dogs.map(function(dog) {
        return <Dog name={dog[0]} sexe={dog[1]} age={dog[2]} />
      })}
    </main>
      <Footer />
    </div>
  );
}

export default App;
