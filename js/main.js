var songs = [
  {name: "A noite", artist: "João Gomes"},
  {name: "Aquelas coisas", artist: "João Gomes"},
  {name: "Basta você me ligar", artist: "Barões da pisadinha"},
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
let audio = new Audio();

function initializeAudio() {
  audio = getRandomMusic();
  audio.volume = 0.5;
  audio.play()
  .catch(error => {
    console.error('Erro ao reproduzir a música: ', error);
  });

  audio.addEventListener('ended', () => {
    console.log("Música terminou. Iniciando uma nova música...");
    initializeAudio();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initializeAudio();

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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomMusic(){
  const songInfo = document.getElementById("songInfo");
  const songName = document.getElementById("songName");
  const artistName = document.getElementById("artistName");

  let song = songs[getRandomInt(0, songs.length)];
  
  songName.textContent = song.name
  artistName.textContent = song.artist
  
  showSongInfo();
  
  return new Audio('../resources/' + song.name + '.mp3');
}