/* const audio = new Audio('/resource/song.mp3');
audio.loop = true; */

window.addEventListener('load', () => {
  var timer = 1746451839;
  var flipdown = new FlipDown(timer, {
    theme: "light",
  })
  .start()
  .ifEnded(() => {
    console.log('The countdown has ended!');
  });

/*   audio.play()
  .catch(error => {
    console.error('Erro ao reproduzir a música: ', error);
  }); */
});
