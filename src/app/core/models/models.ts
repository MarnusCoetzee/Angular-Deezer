export interface Artist {
  id: number;
  name: string;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  nb_album: number;
  nb_fan: number;
  radio: boolean;
  tracklist: string;
}

export interface Album {
  id: number;
  title: string;
  link: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  genre_id: string;
  fans: number;
  release_date: Date;
  record_type: string;
  explicit_lyrics: boolean;
}

export interface Track {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  preview: string;
  artist: Artist;
  album: Album;
}
