import dotenv from "dotenv";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

dotenv.config();

const token: string = process.env.REACT_APP_SPOTIFY_TOKEN || "";

enum RequestMethodType {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

async function fetchSpotifyApi<T>(
  endpoint: string,
  method: RequestMethodType,
  body?: any
): Promise<T> {
  const config: AxiosRequestConfig = {
    method,
    url: `https://api.spotify.com/${endpoint}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: body,
  };

  try {
    const response: AxiosResponse<T> = await axios(config);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching data from Spotify API: ${error.message}`);
    } else {
      throw new Error(
        `Unknown error occurred while fetching data from Spotify API`
      );
    }
  }
}
