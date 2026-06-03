const SongsManager = function () {
  const _songs = {};
  const addSong = function (name, url) {
    if (_songs[name]) {
      console.log("Song already been uploaded to Youtube");
      return;
    }
    _songs[name] = url.split("=")[1];
  };
  const getSong = function (name) {
    if (_songs[name]) {
      console.log(`https://www.youtube.com/watch?v=${_songs[name]}`);
      return;
    } else {
      console.log("No results found");
    }
  };
  return { addSong, getSong };
};

const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

songsManager.getSong("sax"); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.getSong("how long"); // should print https://www.youtube.com/watch?v=CwfoyVa980U
songsManager.getSong("ain't me"); // should print https://www.youtube.com/watch?v=D5drYkLiLI
