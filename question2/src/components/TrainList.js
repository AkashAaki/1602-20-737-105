import React, { useEffect, useState } from 'react';
import { getAllTrains } from '../api';

const TrainList = ({ token }) => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      const allTrains = await getAllTrains(token);
      setTrains(allTrains);
    };

    fetchTrains();
  }, [token]);

  return (
    <div>
      <h2>All Trains</h2>
      <ul>
        {trains.map((train) => (
          <li key={train.trainNumber}>
            {train.trainName} - Seats: {train.seatsAvailable.sleeper}/{train.seatsAvailable.AC}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainList;
