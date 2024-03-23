import { Track } from "../../interfaces/track";
import { RequestMethodType, fetchSpotifyApi } from "./fetch";

interface Response {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: Track[];
}

export async function getTopTracks(): Promise<Track[]> {
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  const topTracks = await fetchSpotifyApi<Response>(
    "v1/me/top/tracks?time_range=long_term&limit=5",
    RequestMethodType.GET
  );
  return topTracks.items as Track[];
}
