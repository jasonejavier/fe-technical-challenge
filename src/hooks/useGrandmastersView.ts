import { useState } from 'react';

export const useGrandmastersView = () => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');

  return {
    viewMode,
    setViewMode,
  };
};
