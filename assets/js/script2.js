// const nextBtn = document.querySelector(".next-btn");
// const playBtn = document.querySelector(".play-btn");
// const pauseBtn = document.querySelector(".pause-btn");
// const previousBtn = document.querySelector(".previous-btn");
// const resetBtn = document.querySelector(".reset-btn");
// const song = document.getElementById("song");
// const cardItem = document.querySelector(".card-item");
// const singerName = document.querySelector('.singer-name');
// const musicInfo = document.querySelector(".music-info")
// const playIcon = document.querySelector(".fa-circle-play")

// let currentSongIndex = 0;
// let currentImgIndex = 0;

// const playList = [
//   {
//     song: "yt5s.com - Billie Eilish - Happier Than Ever (Official Music Video) (128 kbps).mp3",
//     singer: "Billie Eilish",
//     songName: "Happier Than Ever",
//     img: "1a443eb02586eba402068c7b2ce08240.jpg",
//   },
//   {
//     song: "yt5s.com - The Weeknd - Save Your Tears (Official Music Video) (128 kbps).mp3",
//     singer: "The Weeknd",
//     songName: "Save Your Tears",
//     img: "hd-the-weeknd-wallpaper-whatspaper.jpg",
//   },
// ];

// playBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   if (playIcon.getAttribute("class") == "fa-solid fa-circle-play") {
//     playIcon.setAttribute("class", "fa-solid fa-circle-pause");
//     song.play();
//   } else {
//     playIcon.setAttribute("class", "fa-solid fa-circle-play");
//     song.pause();
//   }
  
// });

// const RangeEvent = () => {
//     let seekto = song.duration * (range.value / 100);
//     song.currentTime = seekto;
// }

// nextBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   currentSongIndex = (currentSongIndex + 1) % playList.length;
//   song.src = `./assets/music/${playList[currentSongIndex].song}`;
//   song.play();

//   currentImgIndex = (currentImgIndex + 1) % playList.length;
//   cardItem.style.backgroundImage = `url('./assets/images/${playList[currentImgIndex].img}')`;

//   singerName.textContent = playList[currentSongIndex].singer;
//   musicInfo.textContent = playList[currentSongIndex].songName

//   if(playIcon.getAttribute("class") == "fa-solid fa-circle-play"){
//     playIcon.setAttribute("class", "fa-solid fa-circle-pause")
// }
// });

// previousBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   currentSongIndex = (currentSongIndex - 1 + playList.length) % playList.length;
//   song.src = `./assets/music/${playList[currentSongIndex].song}`;
//   song.play();

//   currentImgIndex = (currentImgIndex - 1 + playList.length) % playList.length;
//   cardItem.style.backgroundImage = `url('./assets/images/${playList[currentImgIndex].img}')`;

//   singerName.textContent = playList[currentSongIndex].singer;
//   musicInfo.textContent = playList[currentSongIndex].songName

//   if(playIcon.getAttribute("class") == "fa-solid fa-circle-play"){
//     playIcon.setAttribute("class", "fa-solid fa-circle-pause")
//   }
// });

// resetBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   song.currentTime = 0;
// });




const nextBtn = document.querySelector(".next-btn");
const playBtn = document.querySelector(".play-btn");
const pauseBtn = document.querySelector(".pause-btn");
const previousBtn = document.querySelector(".previous-btn");
const resetBtn = document.querySelector(".reset-btn");
const song = document.getElementById("song");
const cardItem = document.querySelector(".card-item")
const singerName = document.querySelector('.singer-name')
const range = document.querySelector('.range')
const currentTime = document.querySelector('.current-time')
let currentSongIndex = 0;
let currentImgIndex = 0



const playList = [
    {
        song: "yt5s.com - Billie Eilish - Happier Than Ever (Official Music Video) (128 kbps).mp3",
        singer: "Billie Eilish",
        songName: "Happier Than Ever",
        img: "1a443eb02586eba402068c7b2ce08240.jpg",
    },
    {
        song: "yt5s.com - The Weeknd - Save Your Tears (Official Music Video) (128 kbps).mp3",
        singer: "The Weekend",
        songName: "Save Your Tears",
        img: "hd-the-weeknd-wallpaper-whatspaper.jpg",
    },
    {
        song: "yt5s.com - Arctic Monkeys - Why'd You Only Call Me When You're High_ (Official Video) (128 kbps).mp3",
        singer: "Artic Monkeys",
        songName: "Why'd You Only Call Me When You're High?",
        img: "Arctic Monkeys Poster - AM Wave - Indie Rock Poster - Custom Band Posters - Alex Turner, Matt Helders, Jamie Cook, Nick O'Malley (14x20).jpg",
    },
]


// document.addEventListener('DOMContentLoaded', function() {
//     range.value = 0;
// })

// const rangeEvent = () => {
//   let seekto = curr_track.duration * (range.value / 100);
//   curr_track.currentTime = seekto;
// }

playBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  if (e.target.getAttribute("class") == "fa-solid fa-circle-play") {
    e.target.setAttribute("class", "fa-solid fa-circle-pause");
    song.play();
  } else {
    e.target.setAttribute("class", "fa-solid fa-circle-play");
    song.pause();
  }
  
  
  
});



nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentSongIndex = (currentSongIndex + 1) % playList.length;
  song.src = `./assets/music/${playList[currentSongIndex].song}`;
  song.play();


  currentImgIndex = (currentImgIndex + 1) % playList.length;
  cardItem.style.backgroundImage = `url('./assets/images/${playList[currentImgIndex].img}`
  
  // currentImgIndex = currentSongIndex; // currentImgIndex'i currentSongIndex ile güncelle
  // cardItem.style.backgroundImage = `url('./assets/images/${playList[currentImgIndex].img}`;

    
})

previousBtn.addEventListener('click',(e) => {
  currentSongIndex = (currentSongIndex - 1) % playList.length;
  song.src = `./assets/music/${playList[currentSongIndex].song}`;
  song.play();

  currentImgIndex = (currentImgIndex - 1) % playList.length;
  cardItem.style.backgroundImage = `url('./assets/images/${playList[currentImgIndex].img}`
})

resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    song.currentTime = 0
})

