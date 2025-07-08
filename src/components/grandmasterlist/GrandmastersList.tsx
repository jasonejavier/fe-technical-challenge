import GrandmasterListItem from './GrandmasterListItem';
import VirtualizedListContainer from './VirtualizedListContainer';
import VirtualListItem from './VirtualizedListItem';

interface Grandmaster {
  username: string;
}

interface GrandmastersListProps {
  grandmasters: Grandmaster[];
  onGrandmasterClick: (username: string) => void;
}

const GrandmastersList = ({ grandmasters, onGrandmasterClick }: GrandmastersListProps) => {
  return (
    <VirtualizedListContainer itemCount={grandmasters.length} estimatedItemSize={100} overscan={5}>
      {(virtualItems) =>
        virtualItems.map((virtualItem) => {
          const grandmaster = grandmasters[virtualItem.index];

          return (
            <VirtualListItem key={virtualItem.key} virtualItem={virtualItem}>
              <GrandmasterListItem
                username={grandmaster.username}
                onClick={() => onGrandmasterClick(grandmaster.username)}
              />
            </VirtualListItem>
          );
        })
      }
    </VirtualizedListContainer>
  );
};

export default GrandmastersList;
