// Create a variable to save song lists with song details
const songs = [
    { title: "Song 1", artist: "Artist 1", genre: "Genre 1", duration: "00:03:30" },
    { title: "Song 2", artist: "Artist 2", genre: "Genre 2", duration: "00:02:50" },
    { title: "Song 3", artist: "Artist 1", genre: "Genre 1", duration: "00:04:15" },
    { title: "Song 4", artist: "Artist 3", genre: "Genre 2", duration: "00:05:10" },
    { title: "Song 5", artist: "Artist 2", genre: "Genre 3", duration: "00:02:20" },
    // Add more songs as needed
  ];
  
  // Function to convert duration from hh:mm:ss format to total seconds
  function durationToSeconds(duration) {
    const [hours, minutes, seconds] = duration.split(':').map(parseFloat);
    return hours * 3600 + minutes * 60 + seconds;
  }
  
  // Function to group songs based on artists
  function groupByArtist(songs) {
    const groupedSongs = {};
    songs.forEach(song => {
      if (!groupedSongs[song.artist]) {
        groupedSongs[song.artist] = [];
      }
      groupedSongs[song.artist].push(song);
    });
    return groupedSongs;
  }
  
  // Function to group songs based on genre
  function groupByGenre(songs) {
    const groupedSongs = {};
    songs.forEach(song => {
      if (!groupedSongs[song.genre]) {
        groupedSongs[song.genre] = [];
      }
      groupedSongs[song.genre].push(song);
    });
    return groupedSongs;
  }
  
  // Function to group songs to play songs less than 1 hour with random artists & genres
  function playSongsLessThanOneHour(songs) {
    const filteredSongs = songs.filter(song => durationToSeconds(song.duration) < 3600);
    const randomSongIndex = Math.floor(Math.random() * filteredSongs.length);
    return filteredSongs[randomSongIndex];
  }
  
  // Example usage
  console.log("Songs grouped by artist:", groupByArtist(songs));
  console.log("Songs grouped by genre:", groupByGenre(songs));
  console.log("Random song less than 1 hour:", playSongsLessThanOneHour(songs));
  