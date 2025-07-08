import { intervalToDuration } from 'date-fns';
import { Clock, Wifi } from 'lucide-react';
import { useEffect, useState } from 'react';

interface TimeSinceOnlineProps {
  lastOnlineTimestamp: number;
}

const TimeSinceOnline = ({ lastOnlineTimestamp }: TimeSinceOnlineProps) => {
  const [timeSince, setTimeSince] = useState('');

  useEffect(() => {
    const updateTimer = () => {
      const now = Date.now();
      const lastOnlineDate = new Date(lastOnlineTimestamp * 1000);
      const duration = intervalToDuration({ start: lastOnlineDate, end: now });

      const hh = String(duration.hours ?? 0).padStart(2, '0');
      const mm = String(duration.minutes ?? 0).padStart(2, '0');
      const ss = String(duration.seconds ?? 0).padStart(2, '0');

      setTimeSince(`${hh}:${mm}:${ss}`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [lastOnlineTimestamp]);

  return (
    <div className="border-2 hover:border-primary/50 transition-colors rounded-lg bg-card text-card-foreground shadow-sm">
      <div className="p-4">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <div className="relative">
              <Clock className="w-6 h-6 text-primary" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full animate-pulse" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-1">
              <Wifi className="w-4 h-4 text-muted-foreground" />
              <p className="text-muted-foreground text-sm font-medium">Last Online</p>
            </div>
            <div className="text-2xl font-mono font-bold text-primary">{timeSince}</div>
            <div className="text-sm text-muted-foreground">hours:minutes:seconds ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSinceOnline;
