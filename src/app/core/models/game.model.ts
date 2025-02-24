export interface Game {
  id: number;
  name: string;
  type: string;
  platform: string;
  players: string;
  rating: number;
  description: string;
  image: string;
  reviews: { username: string; content: string }[];
  releaseDate: string;
}

