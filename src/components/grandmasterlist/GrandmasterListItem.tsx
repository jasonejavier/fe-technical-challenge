import { User } from 'lucide-react';
import Badge from '../reusable/Badge';

interface GrandmasterListItemProps {
  username: string;
  onClick: () => void;
}

const GrandmasterListItem = ({ username, onClick }: GrandmasterListItemProps) => {
  return (
    <div
      className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02] border-2 hover:border-primary/50 rounded-lg bg-card text-card-foreground shadow-sm"
      onClick={onClick}
    >
      <div className="p-4">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center ">
              <User className="w-6 h-6 text-primary" />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-lg truncate">{username}</h3>
              <Badge variant="outline" className="text-xs">
                GM
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground text-left">Click to view profile and stats</p>
          </div>

          <div className="flex-shrink-0 text-muted-foreground">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrandmasterListItem;
