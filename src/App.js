import React, {useState, useEffect} from 'react';
import Loading from './Loading';
import Tours from './Tours';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
      const newTours = tours.filter((tour) => tour.id !== id);
      setTours(newTours);
  };

  const fetchTours = async (url) => {
    setLoading(true);
    const response =  await axios({
      url: 'https://course-api.com/react-tours-project',
      method: 'get'
    });  
    setLoading(false);
    setTours(response.data);
    };

    useEffect(()=>{
      fetchTours();
    }, []);

  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    );
  }
  if (tours.length === 0){
    return(
      <main>
        <div className='title'>
            <h2>no tours left</h2>
            <button className='btn' onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}

export default App
