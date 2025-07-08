import { useNavigate } from 'react-router-dom';

export const useGrandmastersNavigation = () => {
  const navigate = useNavigate();

  const handleGrandmasterClick = (username: string) => {
    navigate(`/grandmaster/${username}`);
  };

  return {
    handleGrandmasterClick,
  };
};
