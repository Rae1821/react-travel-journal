import places from './data'
import Header from './Header'
import Destination from './Destination'
import './App.css';

function App() {
  const destinations = places.map(place => {
    return (
      <Destination 
        key={place.id}
        place={place}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <section className="destination-list">
        {destinations}
      </section>
    </div>
  );
}

export default App;
