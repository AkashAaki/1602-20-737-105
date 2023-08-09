import React, { useState, useEffect } from 'react';
import { getAccessToken } from './api';
import TrainList from './components/TrainList';
import TrainDetails from './components/TrainDetails';

function App() {
  const [token, setToken] = useState('');
  const [selectedTrain, setSelectedTrain] = useState(null);

  useEffect(() => {
    const fetchAccessToken = async () => {
      const accessToken = await getAccessToken();
      setToken(accessToken);
    };

    fetchAccessToken();
  }, []);

  const handleTrainClick = (trainNumber) => {
    setSelectedTrain(trainNumber);
  };

  return (
    <div className="App">
      <h1>Train Schedule App</h1>
      {token ? (
        <div>
          <TrainList token={token} />
          {selectedTrain && <TrainDetails trainNumber={selectedTrain} token={token} />}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
