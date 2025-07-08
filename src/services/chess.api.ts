import axios from 'axios';
import type { GrandmasterBasic, GrandmasterProfile } from '../types/chess.types';

const BASE_URL = 'https://api.chess.com/pub';

const chessApi = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const fetchGrandmasters = async (): Promise<GrandmasterBasic[]> => {
  try {
    console.log('Fetching grandmasters from Chess.com API...');
    const response = await chessApi.get('/titled/GM');
    console.log('Grandmasters response:', response.data);

    const players = response.data.players || [];
    return players.map((username: string) => ({
      username,
    })) as GrandmasterBasic[];
  } catch (error) {
    console.error('Error fetching grandmasters:', error);
    throw new Error('Failed to fetch grandmasters');
  }
};

export const fetchGrandmasterProfile = async (username: string): Promise<GrandmasterProfile> => {
  try {
    console.log(`Fetching profile for ${username}`);
    const response = await chessApi.get(`/player/${username}`);
    console.log('Profile response:', response.data);
    return response.data as GrandmasterProfile;
  } catch (error) {
    console.error(`Error fetching profile for ${username}:`, error);
    throw new Error(`Failed to fetch profile for ${username}`);
  }
};
