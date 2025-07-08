import { useMemo, useState } from 'react';
import type { GrandmasterBasic } from '../types/chess.types';

export const useGrandmastersFilters = (grandmasters: GrandmasterBasic[]) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGrandmasters = useMemo(() => {
    if (!grandmasters) return [];
    if (!searchQuery.trim()) return grandmasters;

    return grandmasters.filter((gm) => gm.username.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [grandmasters, searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredGrandmasters,
  };
};
