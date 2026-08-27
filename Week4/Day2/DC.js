// ==========================================
// VIDEO CLASS
// ==========================================

class Video {

    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(
            `${this.uploader} watched all ${this.time} seconds of ${this.title}!`
        );
    }
}


// ==========================================
// CREATE FIRST VIDEO
// ==========================================

const video1 = new Video(
    "Learning JavaScript",
    "John",
    300
);

video1.watch();


// ==========================================
// CREATE SECOND VIDEO
// ==========================================

const video2 = new Video(
    "Learning Python",
    "Sarah",
    450
);

video2.watch();


// ==========================================
// BONUS - ARRAY WITH 5 VIDEOS
// ==========================================

const videoData = [
    ["JavaScript Basics", "David", 200],
    ["Python Basics", "Emma", 350],
    ["HTML Tutorial", "Michael", 180],
    ["CSS Tutorial", "Anna", 250],
    ["React Tutorial", "Daniel", 500]
];


// ==========================================
// CREATE VIDEO INSTANCES
// ==========================================

const videos = [];

videoData.forEach((video) => {

    const newVideo = new Video(
        video[0],
        video[1],
        video[2]
    );

    videos.push(newVideo);
});


// ==========================================
// WATCH ALL VIDEOS
// ==========================================

videos.forEach((video) => {
    video.watch();
});