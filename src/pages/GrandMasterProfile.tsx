import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../components/common/ErrorMessage';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileStatsGrid from '../components/profile/ProfileStatsGrid';
import TimeSinceOnline from '../components/profile/TimeSinceOnline';
import Button from '../components/reusable/Button';
import { useGrandmasterProfile } from '../hooks/useGrandmasterProfile';

const GrandmasterProfile = () => {
  const navigate = useNavigate();
  const { profile, isLoading, error } = useGrandmasterProfile();

  if (isLoading) {
    return <LoadingSpinner message="Loading grandmaster profile..." />;
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" onClick={() => navigate(-1)} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to List
          </Button>
          <ErrorMessage
            title="Profile Not Found"
            message="Failed to load grandmaster profile. Please try again later."
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button variant="outline" onClick={() => navigate(-1)} className="hover:bg-primary/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to List
          </Button>
        </div>

        <ProfileHeader profile={profile} />

        <ProfileStatsGrid profile={profile} />

        {profile.last_online && <TimeSinceOnline lastOnlineTimestamp={profile.last_online} />}
      </div>
    </div>
  );
};

export default GrandmasterProfile;
