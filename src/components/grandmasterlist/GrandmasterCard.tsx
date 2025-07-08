import { User } from 'lucide-react';
import Badge from '../reusable/Badge';

interface GrandmasterCardProps {
  username: string;
  onClick: () => void;
}

const GrandmasterCard = ({ username, onClick }: GrandmasterCardProps) => {
  return (
    <div
      className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02] border-2 hover:border-primary/50 rounded-lg bg-card text-card-foreground shadow-sm"
      onClick={onClick}
    >
      <div className="p-4 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
          <User className="w-8 h-8 text-primary" />
        </div>
        <div className="flex items-center justify-center gap-2 mb-2">
          <h3 className="font-semibold text-lg truncate">{username}</h3>
          <Badge variant="outline" className="text-xs">
            GM
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">Chess Grandmaster</p>
      </div>
    </div>
  );
};

export default GrandmasterCard;
