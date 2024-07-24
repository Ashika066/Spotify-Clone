const music = new Audio('audio/1.m4a')
// music.play();

const songs = [
    {
        id: '1',
        songName: `On My Way <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpeg",
    },
    {
        id: '2',
        songName: `Alan Walker-Fade <br><div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpeg",
    },
    {
        id: "3",
        songName: `Cartoon - On & On <br><div class="subtitle">Daniel Levi</div>`,
        poster: "img/3.jpeg",
    },
    {
        id: "4",
        songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
        poster: "img/4.jpeg",
    },
    {
        id: "5",
        songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
        poster: "img/5.jpeg",
    },
    {
        id: "6",
        songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
        poster: "img/6.jpeg",
    },
    {
        id: "7",
        songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
        poster: "img/7.jpeg",
    },
    {
        id: "8",
        songName: `Suna Hai <br><div class="subtitle">Neha Kakkar</div>`,
        poster: "img/8.jpeg",
    },
    {
        id: "9",
        songName: `Dilbar <br><div class="subtitle">Satyameva Jayate</div>`,
        poster: "img/9.jpeg",
    },
    {
        id: "10",
        songName: `Duniya <br><div class="subtitle">Luka Chuppi</div>`,
        poster: "img/10.jpeg",
    },
    {
        id: "11",
        songName: `Lagdi Lahore Di <br><div class="subtitle">Street Dancer 3D</div>`,
        poster: "img/11.jpeg",
    },
    {
        id: "12",
        songName: `Putt Jatt Da <br><div class="subtitle">Putt Jatt Da</div>`,
        poster: "img/12.jpeg",
    },
    {
        id: "13",
        songName: `Baarishein <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/13.jpeg",
    },
    {
        id: "14",
        songName: `Vaaste <br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/14.jpeg",
    },
    {
        id: "15",
        songName: `Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/15.jpeg",
    },
    {
        id: "16",
        songName: `Tu Meri Jindagi Hai Tu <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/16.jpeg",
    },
    {
        id: "17",
        songName: `Batao Yaad Hai Tumko Wo Jab Dil Ko Churaya Tha <br><div class="subtitle">Rahat Fateh Ali Khan</div>`,
        poster: "img/17.jpeg",
    },
    {
        id: "18",
        songName: `Mere Dhol Judaiyan <br><div class="subtitle">Ali Sethi Seha Gill</div>`,
        poster: "img/18.jpeg",
    },
    {
        id: "19",
        songName: `Eh Munde Pagal Ne Saare <br><div class="subtitle">AP Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
        poster: "img/19.jpeg",
    },
    {
        id: "20",
        songName: `Dunny 82K <br><div class="subtitle">AP Dhillon, Gurinder Gill, Shinda Kahlon</div>`,
        poster: "img/20.jpeg",
    }
    
]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');


masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.computedStyleMap.background = 'rgb(105, 105, 105, .0)';
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.m4a`;
        poster_master_play.src = `img/${index}.jpeg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `audio/${index}.m4a`;
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss =>{
        let {songName /*, poster */} = elss;
            title.innerHTML = songName;
            // poster_master_play.src = poster;
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})




let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    
    // console.log(min1);
    if(sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.m4a`;
    poster_master_play.src = `img/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss =>{
    let {songName /*, poster */} = elss;
        title.innerHTML = songName;
        // poster_master_play.src = poster;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})

next.addEventListener('click', ()=>{
    index++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `audio/${index}.m4a`;
    poster_master_play.src = `img/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss =>{
    let {songName /*, poster */} = elss;
        title.innerHTML = songName;
        // poster_master_play.src = poster;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})















let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 550;
});

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 550;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click', ()=>{
    item.scrollLeft += 550;
});

pop_art_left.addEventListener('click', ()=>{
    item.scrollLeft -= 550;
});

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
    
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;

        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});

music.addEventListener('ended', ()=>{
    if(index == songs.length){
        index = 1
    }
    else{
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `audio/${index}.m4a`;
    poster_master_play.src = `img/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.m4a`;
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss =>{
    let {songName /*, poster */} = elss;
        title.innerHTML = songName;
        // poster_master_play.src = poster;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})

const next_music = () =>{
    // index ++;
    if(index == songs.length){
        index = 1
    }else{
        index++;
    }
    music.src = `audio/${index}.m4a`;
    poster_master_play.src = `img/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.m4a`;
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss =>{
    let {songName /*, poster */} = elss;
        title.innerHTML = songName;
        // poster_master_play.src = poster;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

const repeat_music = () =>{
    index;
    music.src = `audio/${index}.m4a`;
    poster_master_play.src = `img/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.m4a`;
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss =>{
    let {songName /*, poster */} = elss;
        title.innerHTML = songName;
        // poster_master_play.src = poster;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

const random_music = () =>{
    if(index == songs.length){
        index = 1
    }
    else{
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `audio/${index}.m4a`;
    poster_master_play.src = `img/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.m4a`;
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss =>{
    let {songName /*, poster */} = elss;
        title.innerHTML = songName;
        // poster_master_play.src = poster;
        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;
    
    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
    }
})