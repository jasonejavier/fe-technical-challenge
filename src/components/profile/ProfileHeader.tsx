import { Crown, Shield, User } from 'lucide-react';
import type { GrandmasterProfile } from '../../types/chess.types';
import { Avatar, AvatarFallback, AvatarImage } from '../reusable/Avatar';
import Badge from '../reusable/Badge';

interface ProfileHeaderProps {
  profile: GrandmasterProfile;
}

const ProfileHeader = ({ profile }: ProfileHeaderProps) => {
  return (
    <div className="border-2 hover:border-primary/50 transition-colors rounded-lg bg-card text-card-foreground shadow-sm">
      <div className="p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex-shrink-0">
            <Avatar className="w-32 h-32 border-4 border-primary/20">
              <AvatarImage src={profile.avatar} alt={profile.username} />
              <AvatarFallback className="bg-primary/10 text-primary text-4xl">
                <User className="w-16 h-16" />
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="flex-1 text-center md:text-left space-y-4">
            <div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                <h1 className="text-4xl font-bold text-foreground">{profile.name || profile.username}</h1>
                {profile.title && (
                  <Badge variant="default" className="text-lg font-bold px-3 py-1">
                    {profile.title}
                  </Badge>
                )}
              </div>

              <p className="text-xl text-muted-foreground mb-4">@{profile.username}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {profile.status && (
                  <Badge variant="outline" className="capitalize">
                    {profile.status}
                  </Badge>
                )}
                {profile.league && (
                  <Badge variant="outline">
                    <Crown className="w-3 h-3 mr-1" />
                    {profile.league}
                  </Badge>
                )}
                {profile.is_streamer && <Badge variant="outline">📺 Streamer</Badge>}
                {profile.verified && (
                  <Badge variant="default" className="bg-primary">
                    <Shield className="w-4 h-4 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
