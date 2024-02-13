const songs = [
  { title: "Shape of You", artist: "Ed Sheeran", genre: "Pop", duration: "00:03:53" },
  { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock", duration: "00:05:55" },
  { title: "Thriller", artist: "Michael Jackson", genre: "Pop", duration: "00:05:57" },
  { title: "Hotel California", artist: "Eagles", genre: "Rock", duration: "00:06:30" },
  { title: "Billie Jean", artist: "Michael Jackson", genre: "Pop", duration: "00:04:54" },
  { title: "Smells Like Teen Spirit", artist: "Nirvana", genre: "Grunge", duration: "00:05:01" },
  { title: "Wonderwall", artist: "Oasis", genre: "Alternative", duration: "00:04:18" },
  { title: "Thinking Out Loud", artist: "Ed Sheeran", genre: "Pop", duration: "00:04:41" },
  { title: "Don't Stop Me Now", artist: "Queen", genre: "Rock", duration: "00:03:30" },
  { title: "Billie Jean", artist: "Michael Jackson", genre: "Pop", duration: "00:04:54" },
  { title: "Hotel California (Acoustic)", artist: "Eagles", genre: "Acoustic", duration: "00:06:37" },
  { title: "Yellow Submarine", artist: "The Beatles", genre: "Rock", duration: "00:02:38" },
  { title: "All You Need Is Love", artist: "The Beatles", genre: "Rock", duration: "00:03:51" }
];

// Function to convert duration from hh:mm:ss format to total seconds
function durationToSeconds(duration) {
  const [hours, minutes, seconds] = duration.split(':').map(parseFloat);
  return hours * 3600 + minutes * 60 + seconds;
}

// Function to group songs by artist
function groupByArtist(artistName) {
  const artistSongs = songs.filter(song => song.artist === artistName);
  return artistSongs;
}

// Function to group songs by genre
function groupByGenre(genreName) {
  const genreSongs = songs.filter(song => song.genre === genreName);
  return genreSongs;
}

// Function to create a playlist of songs with total duration less than one hour
function makePlaylist(songs) {
  let playlist = [];
  let playlistDuration = 0;
  let shuffledSongs = shuffle(songs);

  for (let i = 0; i < shuffledSongs.length; i++) {
    const songDuration = durationToSeconds(shuffledSongs[i].duration);
    if (playlistDuration + songDuration <= 3600) {
      playlist.push(shuffledSongs[i]);
      playlistDuration += songDuration;
    } else {
      break;
    }
  }
  
  return playlist;
}

// Function to shuffle an array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Example usage
console.log("Grouped songs by artist", groupByArtist("Ed Sheeran"));
console.log("Grouped songs by genre", groupByGenre("Pop"));
console.log("Playlist:", makePlaylist(songs));
