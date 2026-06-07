# PLC Mastery — EENG 459 Interactive Study Tool

An interactive web-based learning platform for studying **Programmable Logic Controllers** based on Frank D. Petruzella's textbook. This tool covers Chapters 1–7 with integrated lessons and a mastery-based quiz system.

## Features

✅ **7 Interactive Chapters** covering PLC fundamentals:
- Chapter 1: Overview of the PLC
- Chapter 2: PLC Hardware Components
- Chapter 3: Number Systems & Codes
- Chapter 4: Logic & Logic Gates
- Chapter 5: Basics of PLC Programming
- Chapter 6: Wiring Diagrams & Basic Ladder
- Chapter 7: Programming Timers

✅ **Mastery-Based Learning Loop**
- Read structured lesson content
- Answer chapter quiz questions
- Missed questions automatically re-queue until mastered
- Track first-try accuracy across chapters

✅ **Comprehensive Exam**
- Unlocks after all 7 chapter quizzes are completed
- Draws 3 random questions per chapter (21 total)
- Full mastery tracking for final assessment

✅ **Progress Tracking**
- Dashboard shows completion percentage
- Visual progress bars per chapter
- Mastery badges for completed chapters
- Statistics: questions attempted, accuracy, and requeue tracking

✅ **Dark Modern UI**
- Responsive design (mobile-friendly)
- Smooth animations and transitions
- High-contrast, accessibility-focused colors

## How to Use

1. Visit the live site (once deployed)
2. Select a chapter from the dashboard
3. **Read** the lesson content (structured points, code examples, notes)
4. **Start** the chapter quiz when ready
5. Answer questions; if incorrect, they return to the queue
6. Master all questions in the chapter to complete it
7. After all 7 chapters are mastered, take the **Comprehensive Exam**
8. Track your overall progress on the dashboard

## Technical Stack

- **Frontend:** Vanilla JavaScript (no frameworks)
- **Markup:** HTML5
- **Styling:** CSS3 (custom variables, grid, flexbox)
- **Fonts:** Google Fonts (Saira Condensed, IBM Plex Mono, Inter Tight)
- **Storage:** Browser localStorage (progress persists across sessions)

## File Structure

```
plc-mastery/
├── index.html          # Main HTML structure
├── app.js              # Application logic, quiz engine, state management
├── README.md           # This file
└── (optional) _config.yml   # GitHub Pages configuration
```

## Deployment

### GitHub Pages (Recommended)
1. Push to your `main` or `gh-pages` branch
2. Enable GitHub Pages in repository settings
3. Site will be live at `https://RedhaAbbas.github.io/plc-mastery/`

### Other Platforms
- Upload `index.html` and `app.js` to any static hosting (Netlify, Vercel, etc.)
- No backend or database required

## Progress Persistence

User progress is automatically saved to the browser's `localStorage`. To reset progress:
- Open browser DevTools → Application → Local Storage → Clear All, then refresh

## Content Reference

All content is based on:
- **Textbook:** Frank D. Petruzella, *Programmable Logic Controllers* (4th Edition)
- **Course:** EENG 459

## License

Educational use only. Content adapted from course materials.

---

**Built with ❤️ for EENG 459 students**
