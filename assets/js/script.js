const nextBtn = document.querySelector(".next-btn");
const playBtn = document.querySelector(".play-btn");
const pauseBtn = document.querySelector(".pause-btn");
const previousBtn = document.querySelector(".previous-btn");
const resetBtn = document.querySelector(".reset-btn");
const song = document.getElementById("song");
const cardItem = document.querySelector(".card-item");
const singerName = document.querySelector(".singer-name");
const musicInfo = document.querySelector(".music-info");
const playIcon = document.querySelector(".fa-circle-play");
const plusIcon = document.querySelector(".fa-plus");
const currentTime = document.querySelector(".current-time");
const range = document.querySelector(".range");
const hambuergerMenu = document.querySelector(".hamburger-menu");
const randomMusic = document.querySelector(".random-music");

let currentSongIndex = 0;
let currentImgIndex = 0;

const playList = [
  {
    song: "yt5s.com - Billie Eilish - Happier Than Ever (Official Music Video) (128 kbps).mp3",
    singer: "Billie Eilish",
    songName: "Happier Than Ever",
    img: "1a443eb02586eba402068c7b2ce08240.jpg",
  },
  {
    song: "yt5s.com - The Weeknd - Save Your Tears (Official Music Video) (128 kbps).mp3",
    singer: "The Weeknd",
    songName: "Save Your Tears",
    img: "hd-the-weeknd-wallpaper-whatspaper.jpg",
  },
  {
    song: "yt5s.com - Arctic Monkeys - Why'd You Only Call Me When You're High_ (Official Video) (128 kbps).mp3",
    singer: "Artic Monkeys",
    songName: "Why'd You Only Call Me",
    img: "Artic Monkeys.jpg",
  },
  {
    song: "yt5s.com - Harry Styles - As It Was (Official Video) (128 kbps).mp3",
    singer: "Harry Styles",
    songName: " As It Was",
    img: "Harry Styles.jpg",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  range.value = 0;
});

const rangeEvent = () => {
  let seekTo = song.duration * (range.value / 100);
  song.currentTime = seekTo;
};

playBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (playIcon.getAttribute("class") == "fa-solid fa-circle-play") {
    playIcon.setAttribute("class", "fa-solid fa-circle-pause");
    song.play();
  } else {
    playIcon.setAttribute("class", "fa-solid fa-circle-play");
    song.pause();
  }
});

song.addEventListener("timeupdate", () => {
  let currentTimeValue = Math.floor(song.currentTime);
  let duration = Math.floor(song.duration);

  let minutes = Math.floor(currentTimeValue / 60);
  let seconds = currentTimeValue - minutes * 60;
  let currentTimeString = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  range.value = (currentTimeValue / duration) * 100;
  currentTime.textContent = currentTimeString;
});

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentSongIndex = (currentSongIndex + 1) % playList.length;
  song.src = `./assets/music/${playList[currentSongIndex].song}`;
  song.play();

  currentImgIndex = (currentImgIndex + 1) % playList.length;
  cardItem.style.backgroundImage = `url('./assets/images/${playList[currentImgIndex].img}')`;

  singerName.textContent = playList[currentSongIndex].singer;
  musicInfo.textContent = playList[currentSongIndex].songName;

  if (playIcon.getAttribute("class") == "fa-solid fa-circle-play") {
    playIcon.setAttribute("class", "fa-solid fa-circle-pause");
  }
});

previousBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentSongIndex = (currentSongIndex - 1 + playList.length) % playList.length;
  song.src = `./assets/music/${playList[currentSongIndex].song}`;
  song.play();

  currentImgIndex = (currentImgIndex - 1 + playList.length) % playList.length;
  cardItem.style.backgroundImage = `url('./assets/images/${playList[currentImgIndex].img}')`;

  singerName.textContent = playList[currentSongIndex].singer;
  musicInfo.textContent = playList[currentSongIndex].songName;

  if (playIcon.getAttribute("class") == "fa-solid fa-circle-play") {
    playIcon.setAttribute("class", "fa-solid fa-circle-pause");
  }
});

resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  song.currentTime = 0;
  range.value = 0;
  currentTime.textContent = "0:00";
});

const hamburgerIcon = document.querySelector(".fa-bars");
const active = document.querySelector(".active");
const musicList = document.querySelector(".music-list");
hambuergerMenu.addEventListener("click", (e) => {
  e.preventDefault();

  const cardItem = document.querySelector(".card-item");
  cardItem.firstElementChild.classList.toggle("playlist");
  if (active.className === "active playlist") {
    active.style.width = "100%";
    active.style.left = "0";
  } else if (active.className === "active") {
    active.style.width = "0";
    active.style.left = "350px";
  }
  const activeItem = document.querySelector(".active-item");
  if (cardItem.firstElementChild.classList == "active playlist") {
    setTimeout(() => {
      activeItem.style.display = "block";
    }, 2000);
  } else {
    activeItem.style.display = "none";
  }

  if (hamburgerIcon.getAttribute("class") === "fa-solid fa-bars") {
    hamburgerIcon.setAttribute("class", "fa-solid fa-x");
  } else {
    hamburgerIcon.setAttribute("class", "fa-solid fa-bars");
  }
});

randomMusic.addEventListener("click", (e) => {
  e.preventDefault();
  const randomIndex = Math.floor(Math.random() * playList.length);
  const randomSong = playList[randomIndex];
  song.src = `./assets/music/${randomSong.song}`
  song.play();

  currentImgIndex = randomIndex;
  cardItem.style.backgroundImage = `url('./assets/images/${randomSong.img}')`;

  singerName.textContent = randomSong.singer;
  musicInfo.textContent = randomSong.songName;

  
});


