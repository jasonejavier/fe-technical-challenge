import GrandmasterCard from './GrandmasterCard';

interface Grandmaster {
  username: string;
}

interface GrandmastersGridProps {
  grandmasters: Grandmaster[];
  onGrandmasterClick: (username: string) => void;
}

const GrandmastersGrid = ({ grandmasters, onGrandmasterClick }: GrandmastersGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {grandmasters.map((grandmaster) => (
        <GrandmasterCard
          key={grandmaster.username}
          username={grandmaster.username}
          onClick={() => onGrandmasterClick(grandmaster.username)}
        />
      ))}
    </div>
  );
};

export default GrandmastersGrid;
