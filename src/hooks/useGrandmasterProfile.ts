import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchGrandmasterProfile } from '../services/chess.api';

export const useGrandmasterProfile = () => {
  const { username } = useParams<{ username: string }>();

  const {
    data: profile,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['grandmaster-profile', username],
    queryFn: () => fetchGrandmasterProfile(username!),
    enabled: !!username,
  });

  return {
    username,
    profile,
    isLoading,
    error,
  };
};
