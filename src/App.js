import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Dog from './components/Dog/Dog';
import Countclic from './components/countclic/Countclic';
import User from './components/User';
import Light from './components/Light';

function App() {
  const dogs = [
    ["medor", "male", "5"],
    ["kiki", "male", "2"],
    ["bully", "female", "10"]
  ];
  const user = {
    firstname: "Harold",
    lastname: "Pierrache",
    age: 35,
    job: "futur-dev",
    hobby: "ballades en forêt",
    description: "BG"
  };


  return (
    <div>
      <Header />
    <main className="container my-5">
      {dogs.map(function(dog) {
        return <Dog name={dog[0]} sexe={dog[1]} age={dog[2]} />
      })}
      <User firstname={user.firstname} lastname={user.lastname} age={user.age} job={user.job} hobby={user.hobby} description={user.description}/>
      <Light />

      <h2>un compteur de clics</h2>
      <Countclic />
      
    </main>
      <Footer />
    </div>
  );
}

export default App;
