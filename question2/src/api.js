import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144';
const COMPANY_NAME = 'Train Central';
const CLIENT_ID = 'b46128a0-fbde-4c16-a4b1-6ae6ad718e27';
const CLIENT_SECRET = 'XOyolORPayKBOdAN';

// Authenticate and get access token
export async function getAccessToken() {
  const response = await axios.post(`${API_BASE_URL}/train/auth`, {
    companyName: COMPANY_NAME,
    clientID: CLIENT_ID,
    ownerName: 'Ram',
    ownerEmail: 'ram@abc.edu',
    rollNo: '1',
    clientSecret: CLIENT_SECRET,
  });

  return response.data.access_token;
}

// Get list of all trains
export async function getAllTrains(token) {
  const response = await axios.get(`${API_BASE_URL}/train/trains`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

// Get details of a specific train
export async function getTrainDetails(trainNumber, token) {
  const response = await axios.get(`${API_BASE_URL}/train/trains/${trainNumber}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
