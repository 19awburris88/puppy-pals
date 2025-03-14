import { puppyList } from './data.js';
import { useState } from 'react';
import '/Users/austinburris/Desktop/Coursework/Unit 3 /block24/vite-project/src/App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  // Find the selected puppy based on featPupId
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  // Log the selected puppy data
  console.log("Featured Puppy: ", featuredPup);

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p 
          onClick={() => { 
            console.log("puppy id: ", puppy.id);
            setFeatPupId(puppy.id);
          }} 
          key={puppy.id}
        >
          {puppy.name}
        </p>
      ))}
      
      {/* Conditionally render the featuredPup details */}
      {featuredPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <p>Age: {featuredPup.age}</p>
          <p>Breed: {featuredPup.breed}</p>
        </div>
      )}
    </div>
  );
}

export default App;
