# Research Pathways B2 · Interactive Workbook

Interactive web version of the **Research Pathways B2 Workbook** (UAZ Graduate Programmes). It is a static site for GitHub Pages: no server, no database, no sign-in. Students' answers are saved in their own browser (localStorage).

## What students can do

- Complete the 12 units of the Workbook (Vocabulary, Grammar for writing, Reading, Listen again, Writing, My article, Extensive reading).
- Get instant feedback: **Check** shows what is wrong and why; **Show answer** reveals the key.
- Write open tasks with a word counter and a checklist, then compare with a **model answer**.
- Keep a learning diary for each unit.
- Use **My portfolio** to track the 12 portfolio documents, the integrated article and the CEFR B2 self-assessment (Start / End).
- **Download my results (Excel)**: a CSV file with self-check scores per exercise and per unit, all written texts, reading logs, diaries, portfolio, article tracker and self-assessment. Students send this file to their teacher.

## Structure

```
index.html               page shell
css/styles.css           styles
js/audio-config.js       optional links for the Student's Book audio tracks
js/data-units-1-6.js     content and answer key, units 1–6
js/data-units-7-12.js    content and answer key, units 7–12
js/app.js                exercise engine, portfolio and results download
audio/                   place for the MP3 files (see audio/README.md)
```

## Publishing

Settings → Pages → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)`.
The site will be available at `https://<user>.github.io/Research-B2/`.

## Audio

The audio files are not uploaded yet. Every *Listen again* exercise and the *Student's Book audio* page already have a player; until the files exist, students see "Audio coming soon". See `audio/README.md` to add them.

## Notes

- Studies, people and texts marked *written for this workbook* are fictional and are used for practice.
- Photographs are loaded from Wikimedia Commons (public domain or free licences); credits appear under each image.
