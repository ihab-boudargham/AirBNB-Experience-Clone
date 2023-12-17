import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from './components/card';
import data from './components/data';

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className='flex p-9 justify-between items-center overflow-x-auto gap-4'>
        {data.map((item, index) => (
          <Card
            key={index}  
            img={item.img}
            location={item.location}
            distance={item.distance}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
}

export default App;
