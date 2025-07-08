import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { useProfileUtils } from '../../hooks/useProfileUtils';
import type { GrandmasterProfile } from '../../types/chess.types';

interface ProfileStatsGridProps {
  profile: GrandmasterProfile;
}

const ProfileStatsGrid = ({ profile }: ProfileStatsGridProps) => {
  const { formatDate, getCountryCode } = useProfileUtils();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="border-2 hover:border-primary/50 transition-colors rounded-lg bg-card text-card-foreground shadow-sm">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-sm text-muted-foreground">Country</p>
              <p className="font-semibold">{getCountryCode(profile.country) || 'Unknown'}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 hover:border-primary/50 transition-colors rounded-lg bg-card text-card-foreground shadow-sm">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-sm text-muted-foreground">Joined</p>
              <p className="font-semibold">{formatDate(profile.joined)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 hover:border-primary/50 transition-colors rounded-lg bg-card text-card-foreground shadow-sm">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-sm text-muted-foreground">Followers</p>
              <p className="font-semibold">{profile.followers?.toLocaleString() || '0'}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 hover:border-primary/50 transition-colors rounded-lg bg-card text-card-foreground shadow-sm">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-sm text-muted-foreground">Player ID</p>
              <p className="font-semibold">{profile.player_id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStatsGrid;
