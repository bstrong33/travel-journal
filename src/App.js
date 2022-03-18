import './App.css';
import Header from './components/Header';
import Log from './components/Log';
import data from './Data';

function App() {

const travelLog = data.map(entry => {
  return <Log 
    key={entry.id}
    title={entry.title}
    location={entry.location}
    googleLink={entry.googleLink}
    dates={entry.dates}
    description={entry.description}
    image={entry.image}
  />
})

  return (
    <div className="App">
      <Header />
      {travelLog}
    </div>
  );
}

export default App;
