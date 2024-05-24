import "./App.css";
import Gig from './components/GIg'
import { useState , useEffect} from "react";

function App() {
  const [gigs,setGigs] =  useState([])
  const [isClicked,setIsClicked] = useState(false)
  
  useEffect(() => {
    const URL = `https://makers-gig-backend.onrender.com/events`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setGigs(data.map((data)=>(
          {
            id: data.event_id,
            artist: data.band_name,
            img: data.image_url,
            description : data.description,
            time: data.time.substr(11,5),
            date: data.time.substr(0,10),
            location : data.location,
            isFavourite: data.favourited
          }
        )))
        console.log(data)
  });
  }, []);

  const toggleClicked = () =>{
    setIsClicked((prevState) => !prevState)
  }
  
  let filteredGigs = []
  if(isClicked){ 
    filteredGigs = gigs.filter((gig) => gig.isFavourite)
  } else {
    filteredGigs = gigs.sort((a, b) => b.isFavourite - a.isFavourite);
  }

  return (
    <>
      <h1>What's On?</h1>
      {gigs.length === 0 ? <p>Loading...</p> :
        <>
          <button 
          onClick={toggleClicked}
          role = 'showFav'
          > 
            {isClicked ?'Show All': 'Your Favourites'}
          </button>
          
          {isClicked && filteredGigs.length === 0 ? 
              <h3>You have no favourites yet!</h3>
          : 
          <>
            {filteredGigs.map ((gig)=>{
              return <Gig
                key = {gig.id}
                id = {gig.id}
                artist = {gig.artist}
                img = {gig.img}
                description = {gig.description}
                time = {gig.time}
                date = {gig.date}
                location = {gig.location}
                eventName = {gig.eventName}
                isFavourite = {gig.isFavourite}
                setGigs = {setGigs}      
              />
            })}
          </>
        }
      </>
    }
    </>
  );
}

export default App;
