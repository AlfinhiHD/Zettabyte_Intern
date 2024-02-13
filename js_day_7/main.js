const songs = [
  { title: 'Shape of You', artist: 'Ed Sheeran', genre: 'Pop', duration: '00:03:53' },
  { title: 'Bohemian Rhapsody', artist: 'Queen', genre: 'Rock', duration: '00:05:55' },
  { title: 'Thriller', artist: 'Michael Jackson', genre: 'Pop', duration: '00:05:57' },
  { title: 'Hotel California', artist: 'Eagles', genre: 'Rock', duration: '00:06:30' },
  { title: 'Billie Jean', artist: 'Michael Jackson', genre: 'Pop', duration: '00:04:54' },
  { title: 'Smells Like Teen Spirit', artist: 'Nirvana', genre: 'Grunge', duration: '00:05:01' },
  { title: 'Wonderwall', artist: 'Oasis', genre: 'Alternative', duration: '00:04:18' },
  { title: 'Thinking Out Loud', artist: 'Ed Sheeran', genre: 'Pop', duration: '00:04:41' },
  { title: "Don't Stop Me Now", artist: 'Queen', genre: 'Rock', duration: '00:03:30' },
  { title: 'Hotel California (Acoustic)', artist: 'Eagles', genre: 'Acoustic', duration: '00:06:37' },
  { title: 'Yellow Submarine', artist: 'The Beatles', genre: 'Rock', duration: '00:02:38' },
  { title: 'All You Need Is Love', artist: 'The Beatles', genre: 'Rock', duration: '00:03:51' },
  { title: 'Wonderful Tonight', artist: 'Eric Clapton', genre: 'Rock', duration: '00:03:38' },
  { title: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars', genre: 'Funk', duration: '00:04:31' },
  { title: 'Piano Man', artist: 'Billy Joel', genre: 'Rock', duration: '00:05:37' },
  { title: 'I Want to Hold Your Hand', artist: 'The Beatles', genre: 'Rock', duration: '00:02:24' },
  { title: 'Every Breath You Take', artist: 'The Police', genre: 'Rock', duration: '00:04:13' },
  { title: 'Let It Be', artist: 'The Beatles', genre: 'Rock', duration: '00:03:50' },
  { title: 'Rolling in the Deep', artist: 'Adele', genre: 'Pop', duration: '00:03:48' },
  { title: 'Hotel California (Live)', artist: 'Eagles', genre: 'Rock', duration: '00:06:41' },
  { title: 'Under Pressure', artist: 'Queen & David Bowie', genre: 'Rock', duration: '00:04:04' },
  { title: 'Sweet Home Alabama', artist: 'Lynyrd Skynyrd', genre: 'Rock', duration: '00:04:43' },
  { title: 'Hey Jude', artist: 'The Beatles', genre: 'Rock', duration: '00:07:11' },
  { title: 'Purple Haze', artist: 'Jimi Hendrix', genre: 'Rock', duration: '00:02:50' },
  { title: 'Back in Black', artist: 'AC/DC', genre: 'Rock', duration: '00:04:15' },
  { title: 'Smells Like Teen Spirit', artist: 'Nirvana', genre: 'Grunge', duration: '00:05:01' },
  { title: 'I Will Always Love You', artist: 'Whitney Houston', genre: 'Pop', duration: '00:04:31' },
  { title: "Livin' on a Prayer", artist: 'Bon Jovi', genre: 'Rock', duration: '00:04:09' },
  { title: 'Hey, Soul Sister', artist: 'Train', genre: 'Pop', duration: '00:03:36' },
  { title: 'Stairway to Heaven', artist: 'Led Zeppelin', genre: 'Rock', duration: '00:08:03' },
  { title: 'Let It Be', artist: 'The Beatles', genre: 'Rock', duration: '00:03:50' },
  { title: "Sweet Child o' Mine", artist: "Guns N' Roses", genre: 'Rock', duration: '00:05:55' },
  { title: 'Every Breath You Take', artist: 'The Police', genre: 'Rock', duration: '00:04:13' },
  { title: 'Another Brick in the Wall', artist: 'Pink Floyd', genre: 'Rock', duration: '00:03:59' },
  { title: 'Imagine', artist: 'John Lennon', genre: 'Rock', duration: '00:03:04' },
  { title: "Livin' on a Prayer", artist: 'Bon Jovi', genre: 'Rock', duration: '00:04:09' },
  { title: "Don't Stop Believin'", artist: 'Journey', genre: 'Rock', duration: '00:04:11' },
  { title: 'Take on Me', artist: 'a-ha', genre: 'Pop', duration: '00:03:45' },
  { title: 'I Wanna Dance with Somebody', artist: 'Whitney Houston', genre: 'Pop', duration: '00:04:50' },
  { title: 'September', artist: 'Earth, Wind & Fire', genre: 'R&B', duration: '00:03:35' },
  { title: 'Eye of the Tiger', artist: 'Survivor', genre: 'Rock', duration: '00:04:05' },
  { title: 'Bohemian Rhapsody', artist: 'Queen', genre: 'Rock', duration: '00:05:55' },
  { title: 'Purple Rain', artist: 'Prince', genre: 'Pop', duration: '00:08:40' },
  { title: 'With or Without You', artist: 'U2', genre: 'Rock', duration: '00:04:56' },
  { title: 'Beat It', artist: 'Michael Jackson', genre: 'Pop', duration: '00:04:18' },
  { title: 'Yesterday', artist: 'The Beatles', genre: 'Rock', duration: '00:02:05' },
  { title: 'Dancing Queen', artist: 'ABBA', genre: 'Pop', duration: '00:03:50' },
  { title: "Livin' on a Prayer", artist: 'Bon Jovi', genre: 'Rock', duration: '00:04:09' },
  { title: 'I Want to Hold Your Hand', artist: 'The Beatles', genre: 'Rock', duration: '00:02:24' },
  { title: 'Another One Bites the Dust', artist: 'Queen', genre: 'Rock', duration: '00:03:36' },
  { title: 'Brown Eyed Girl', artist: 'Van Morrison', genre: 'Rock', duration: '00:03:05' },
  { title: 'You Shook Me All Night Long', artist: 'AC/DC', genre: 'Rock', duration: '00:03:30' },

  // > 15 meniit Duration
  { title: 'Surah An-Naba', artist: 'Nur Hanif', genre: 'Religi', duration: '00:30:50' },
  { title: "Surah An-Nazi'at", artist: 'Nur Hanif', genre: 'Religi', duration: '00:20:00' },
  { title: 'Surah Ab-Basa', artist: 'Nur Hanif', genre: 'Religi', duration: '00:25:50' },
  { title: 'Surah At-Taqwir', artist: 'Nur Hanif', genre: 'Religi', duration: '00:18:00' },
  { title: 'Surah Al-Infitar', artist: 'Nur Hanif', genre: 'Religi', duration: '00:21:00' },
  { title: 'Surah Al-Mutaffifin', artist: 'Nur Hanif', genre: 'Religi', duration: '00:22:50' },
  //

  { title: 'Like a Prayer', artist: 'Madonna', genre: 'Pop', duration: '00:05:41' },
  { title: 'Help!', artist: 'The Beatles', genre: 'Rock', duration: '00:02:18' },
];

function durationToSeconds(duration) {
  const [hours, minutes, seconds] = duration.split(':').map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

function groupByArtist(character) {
  const artistSongs = songs.filter((song) =>
    song.artist.toLowerCase().replace(/\s+/g, '').includes(character.toLowerCase().replace(/\s+/g, ''))
  );
  return artistSongs;
}

function groupByGenre(character) {
  const genreSongs = songs.filter((song) =>
    song.genre.toLowerCase().replace(/\s+/g, '').includes(character.toLowerCase().replace(/\s+/g, ''))
  );
  return genreSongs;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  // console.log(array);
  return array;
}

function makePlaylist(songs) {
  let playlist = [];
  let playlistDuration = 0;
  let shuffledSongs = shuffleArray(songs);

  shuffledSongs.forEach((song) => {
    const songDuration = durationToSeconds(song.duration);
    // console.log(songDuration)
    if (playlistDuration + songDuration <= 3600) {
      playlist.push(song);
      playlistDuration += songDuration;
    } else {
    }
  });

  //Format second to HH:MM:SS
  const totalDurationHH = Math.floor(playlistDuration / 3600);
  const totalDurationMM = Math.floor((playlistDuration % 3600) / 60);
  const totalDurationSS = playlistDuration % 60;
  const totalDurationFormatted = `${totalDurationHH.toString().padStart(2, '0')}:${totalDurationMM
    .toString()
    .padStart(2, '0')}:${totalDurationSS.toString().padStart(2, '0')}`;

  return { playlist, totalDurationFormatted };
}

console.log('Grouped songs by artist', groupByArtist('mic ha el'));
console.log('\n');
console.log("Grouped songs by genre", groupByGenre("p"));
console.log("\n");

const { playlist, totalDurationFormatted } = makePlaylist(songs);
console.log('Playlist', playlist);
console.log('')
console.log('Total Durasi Playlist : ', totalDurationFormatted)
