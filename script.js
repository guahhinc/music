document.addEventListener('DOMContentLoaded', () => {
    const songs = [
        {
            title: 'Your Song Title 1',
            artist: 'Artist Name 1',
            url: 'YOUR_RAW_GITHUB_URL_1.mp3'
        },
        {
            title: 'Your Song Title 2',
            artist: 'Artist Name 2',
            url: 'YOUR_RAW_GITHUB_URL_2.mp3'
        }
        // Add more songs here
    ];

    const audioPlayer = document.getElementById('audio-player');
    const songListContainer = document.getElementById('song-list');
    let currentSongIndex = 0;
    let isPlaying = false;

    function loadSong(songIndex) {
        const song = songs[songIndex];
        audioPlayer.src = song.url;
        document.getElementById('song-title').textContent = song.title;
        document.getElementById('artist-name').textContent = song.artist;
    }

    function playSong() {
        audioPlayer.play();
        isPlaying = true;
        // Update play/pause button icon
    }

    function pauseSong() {
        audioPlayer.pause();
        isPlaying = false;
        // Update play/pause button icon
    }

    // Event listeners for click wheel buttons
    document.querySelector('.play-pause-button').addEventListener('click', () => {
        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    });

    document.querySelector('.forward-button').addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    });

    document.querySelector('.backward-button').addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    });

    // Initial song load
    loadSong(currentSongIndex);
});
