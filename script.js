document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audioPlayer");
  const playlist = document.getElementById("playlist");

  const songs = [
    { title: "Song 1", source: "song1.mp3" },
    { title: "Song 2", source: "song2.mp3" },
    { title: "Song 3", source: "song3.mp3" },
    { title: "song 4", source: "song4.mp3" },
    { title: "song 5", source: "song5.mp3" },
    { title: "Song 6", source: "song6.mp3" },
    { title: "Song 7", source: "song7.mp3" },
    { title: "Song 8", source: "song8.mp3" },
    { title: "song 9", source: "song9.mp3" },
    { title: "song 10", source: "song10.mp3" },
  ];

  songs.forEach((song, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${song.title}`;
    listItem.addEventListener("click", () => playSong(index));
    playlist.appendChild(listItem);
  });

  function playSong(index) {
    const selectedSong = songs[index];
    audioPlayer.src = selectedSong.source;
    audioPlayer.play();
  }
});
