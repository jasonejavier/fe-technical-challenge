export interface GrandmasterBasic {
  username: string;
}

export interface GrandmasterProfile {
  avatar: string;
  player_id: number;
  '@id': string;
  url: string;
  name: string;
  username: string;
  title: string;
  followers: number;
  country: string;
  last_online: number;
  joined: number;
  status: 'premium' | 'basic' | 'closed' | string;
  is_streamer: boolean;
  verified: boolean;
  league: string;
  streaming_platforms: string[];
}
