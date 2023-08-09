import React, { useEffect, useState } from 'react';
import { getTrainDetails } from '../api';

const TrainDetails = ({ trainNumber, token }) => {
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchTrainDetails = async () => {
      const trainDetails = await getTrainDetails(trainNumber, token);
      setTrain(trainDetails);
    };

    fetchTrainDetails();
  }, [trainNumber, token]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Train Details</h2>
      <p>Train Name: {train.trainName}</p>
      <p>Seats: Sleeper - {train.seatsAvailable.sleeper}, AC - {train.seatsAvailable.AC}</p>
      {/* Add more train details here */}
    </div>
  );
};

export default TrainDetails;
