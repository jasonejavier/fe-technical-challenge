import { Search } from 'lucide-react';

interface EmptyStateProps {
  searchQuery: string;
}

const EmptyState = ({ searchQuery }: EmptyStateProps) => {
  return (
    <div className="text-center py-16 space-y-4">
      <div className="text-6xl opacity-20 flex justify-center items-center">
        <Search size={48} />
      </div>
      <h3 className="text-xl font-semibold">No Grandmasters found</h3>
      <p className="text-muted-foreground">No results for "{searchQuery}". Try a different search term.</p>
    </div>
  );
};

export default EmptyState;
