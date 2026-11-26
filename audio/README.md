# Audio files

The Student's Book has 24 tracks (two per unit). The site looks for them here, so you can add them in either of two ways.

## Option 1: upload MP3 files to this folder

Use these exact names:

```
track-1-1.mp3   track-1-2.mp3
track-2-1.mp3   track-2-2.mp3
...
track-12-1.mp3  track-12-2.mp3
```

Track *X.Y* → `track-X-Y.mp3`. Keep each file under 25 MB (GitHub's web upload limit); 64–96 kbps mono MP3 is enough for speech.

## Option 2: use links

Open `js/audio-config.js` and paste a link next to the track, for example:

```js
"1.1": "https://drive.google.com/file/d/FILE_ID/view?usp=sharing",
```

Google Drive links (shared as "Anyone with the link") play in an embedded player. Direct links to MP3 files also work.

Until a track is available, students see "Audio coming soon".
