import { makeAutoObservable } from "mobx";

class SongStore {
  songs: string[] = [];
  currentSong: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setSongs(songs: string[]) {
    this.songs = songs;
  }

  setCurrentSong(song: string) {
    this.currentSong = song;
    console.log(this.currentSong);
  }
}

const songStore = new SongStore();
export default songStore;
