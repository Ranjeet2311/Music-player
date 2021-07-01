const audioLists = [
  {
    id: 1,
    title: "Galliyan",
    song: "ek-villain-teri-galliyan.mp3",
    Movie: "Ek Villian",
  },
  {
    id: 2,
    title: "Samjhawan",
    song: "Humpty Sharma Ki Dulhania - Samjhawan.mp3",
    Movie: "Humpty Sharma Ki Dulhania",
  },
  {
    id: 3,
    title: "Badshah -Genda Phool",
    song: "Badshah -Genda Phool.mp3",
    Movie: "Album",
  },
  {
    id: 4,
    title: "Delhi-6 - Genda Phool",
    song: "Delhi-6 - Genda Phool.mp3",
    Movie: "Delhi-6 ",
  },
  {
    id: 5,
    title: "Justin Bieber - Yummy",
    song: "Justin Bieber - Yummy.mp3",
    Movie: "Yummy ",
  },
  {
    id: 6,
    title: "Daddy Yanky - Gasolina",
    song: "DADDY YANKY - GASOLINA.mp3",
    Movie: "Gasolina ",
  },
  {
    id: 6,
    title: "Despacito",
    song: "Luis Fonsi Feat. Daddy Yankee - Despacito.mp3",
    Movie: "Luis Fonsi Feat. Daddy Yankee ",
  },
];

let currentSong = 0;

// const wrapper = document.querySelector(".wrapper");
const audio = document.querySelector("#audio");
const playBtn = document.querySelector("#play");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const heading = document.querySelector("#Title");
const movie = document.querySelector("#movie");

playBtn.innerHTML = '<i class="fas fa-play"></i>';
nextBtn.innerHTML = '<i class="fas fa-forward"></i>';
prevBtn.innerHTML = '<i class="fas fa-backward"></i>';

window.addEventListener("DOMContentLoaded", () => {
  showMusic(currentSong);
});

function showMusic() {
  let music = audioLists[currentSong];
  //   const [title, song, Movie] = audioLists;
  heading.innerHTML = music.title;
  audio.src = music.song;
  movie.innerHTML = music.Movie;
}

prevBtn.addEventListener("click", () => {
  currentSong--;
  if (currentSong < 0) {
    currentSong = audioLists.length - 1;
  }
  showMusic(currentSong);
});
nextBtn.addEventListener("click", () => {
  currentSong++;

  if (currentSong >= audioLists.length) {
    currentSong = 0;
  }
  showMusic(currentSong);
});

// ----Adding Event listener

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i> ';
  } else {
    playBtn.innerHTML = '<i class="fas fa-play"></i> ';
    audio.pause();
  }
});
