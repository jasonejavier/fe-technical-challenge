import { Crown, Trophy } from 'lucide-react';
import Badge from '../reusable/Badge';

interface GrandMasterHeaderProps {
  totalCount: number;
}

const GrandMasterHeader = ({ totalCount }: GrandMasterHeaderProps) => {
  return (
    <div className="bg-card border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Crown className="w-8 h-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold">Chess Grandmasters</h1>
            <Crown className="w-8 h-8 text-primary" />
          </div>

          <p className="text-muted-foreground text-lg">Explore the world's greatest chess players</p>

          <div className="flex justify-center">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold">
              <Trophy className="w-4 h-4 mr-2" />
              {totalCount} Grandmasters
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrandMasterHeader;
