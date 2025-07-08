export const useProfileUtils = () => {
  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatRating = (rating: number) => {
    return rating?.toString() || 'N/A';
  };

  const getCountryCode = (countryUrl: string) => {
    return countryUrl?.split('/').pop()?.toUpperCase() || '';
  };

  return {
    formatDate,
    formatRating,
    getCountryCode,
  };
};
