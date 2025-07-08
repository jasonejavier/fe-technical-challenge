import EmptyState from '../components/common/EmptyState';
import ErrorMessage from '../components/common/ErrorMessage';
import LoadingSpinner from '../components/common/LoadingSpinner';
import GrandMasterHeader from '../components/grandmasterlist/GrandmasterHeader';
import GrandmastersGrid from '../components/grandmasterlist/GrandmastersGrid';
import GrandmastersList from '../components/grandmasterlist/GrandmastersList';
import SearchAndFilters from '../components/grandmasterlist/SearchAndFilters';
import { useGrandmastersNavigation } from '../hooks/useGrandmasterNavigation';
import { useGrandmastersData } from '../hooks/useGrandmastersData';
import { useGrandmastersFilters } from '../hooks/useGrandmastersFilters';
import { useGrandmastersView } from '../hooks/useGrandmastersView';

const GrandmastersLists = () => {
  const { grandmasters, isLoading, error } = useGrandmastersData();
  const { searchQuery, setSearchQuery, filteredGrandmasters } = useGrandmastersFilters(grandmasters);
  const { viewMode, setViewMode } = useGrandmastersView();
  const { handleGrandmasterClick } = useGrandmastersNavigation();

  if (isLoading) {
    return <LoadingSpinner message="Loading grandmasters..." />;
  }

  if (error) {
    return <ErrorMessage title="Failed to load grandmasters" message="Please try again later." />;
  }

  return (
    <div className="min-h-screen bg-background">
      <GrandMasterHeader totalCount={filteredGrandmasters.length} />

      <SearchAndFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      <div className="container mx-auto px-4 py-6">
        {filteredGrandmasters.length === 0 && searchQuery ? (
          <EmptyState searchQuery={searchQuery} />
        ) : (
          <div className="relative">
            {viewMode === 'grid' ? (
              <GrandmastersGrid grandmasters={filteredGrandmasters} onGrandmasterClick={handleGrandmasterClick} />
            ) : (
              <GrandmastersList grandmasters={filteredGrandmasters} onGrandmasterClick={handleGrandmasterClick} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GrandmastersLists;
