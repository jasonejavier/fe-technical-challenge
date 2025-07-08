import { useQuery } from '@tanstack/react-query';
import { fetchGrandmasters } from '../services/chess.api';

export const useGrandmastersData = () => {
  const {
    data: grandmasters,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['grandmasters'],
    queryFn: fetchGrandmasters,
  });

  return {
    grandmasters: grandmasters || [],
    isLoading,
    error,
  };
};
