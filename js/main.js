var debugSongs = [
  {name: "debug01", artist: "Debug"},
  {name: "debug02", artist: "Debug"},
  {name: "debug04", artist: "Debug"},
  {name: "debug05", artist: "Debug"}
];

var songs = [
  {name: "A noite", artist: "João Gomes"},
  {name: "Aquelas coisas", artist: "João Gomes"},
  {name: "Basta Você Me Ligar", artist: "Barões da pisadinha"},
  {name: "Camisa 10", artist: "Turma do pagode"},
  {name: "Esquema Preferido", artist: "Tarcísio do acordeon"},
  {name: "Garçon", artist: "Reginaldo Rossi"},
  {name: "Hackearem-me", artist: "Tierry Henry"},
  {name: "Já que me ensinou a beber", artist: "Barões da pisadinha"},
  {name: "Quem me dera", artist: "Márcia Felipe e Jerry Smith"},
  {name: "Se eu largar o freio", artist: "Péricles"},
  {name: "Set fire to the rain", artist: "Adele"}
];

// Inicializa o áudio com uma música aleatória
let audio;
let songQueue = [];

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById("modalPlaylist");
  const buttonClose = document.getElementById("buttonPlaylist");
  
  modal.show();
  
  buttonClose.addEventListener('click', () => {
    initializeAudio()
    modal.close();
  });
  
  var timer = 1746451839;
  var flipdown = new FlipDown(timer, {
    theme: "light",
  })
  .start()
  .ifEnded(() => {
    console.log('The countdown has ended!');
  });
});

function showSongInfo() {
  songInfo.classList.remove('hidden');
  songInfo.classList.add('visible');
  setTimeout(hideSongInfo, 5000); // Oculta o pop-up após 5 segundos
}

function hideSongInfo() {
  songInfo.classList.remove('visible');
  songInfo.classList.add('hidden');
}

function shuffle(array){
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function initializeAudio() {
  if (songQueue.length === 0) {
    songQueue = [...debugSongs];
    shuffle(songQueue);
  }

  let count = 1;
  for (let i = songQueue.length - 1; i > 0; i--) {
    console.log( count++ + "º música: " + songQueue[i].name);
  }
  let song = songQueue.pop();
  audio = new Audio('../resources/' + song.name + '.mp3');
  audio.volume = 0.5; // Ajusta o volume para 50%
  audio.play()
    .catch(error => {
      console.error('Erro ao reproduzir a música: ', error);
    });

  const songInfo = document.getElementById("songInfo");
  const songName = document.getElementById("songName");
  const artistName = document.getElementById("artistName");

  songName.textContent = song.name;
  artistName.textContent = song.artist;

  showSongInfo();

  audio.addEventListener('ended', () => {
    console.clear();
    initializeAudio();
  });
}
