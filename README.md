# Aimerz Skills Assessment

A responsive, single-page frontend skills assessment built with React. It includes
10 multiple-choice questions, a 10-minute timer, saved progress, a score summary,
and a review of submitted answers.

## Requirements

- Node.js 20.19+ or 22.12+ (required by the installed Vite version)
- npm

Check your versions with:

```bash
node --version
npm --version
```

## Project setup

Open a terminal in the project directory:

```bash
cd task-assessment-app
```

If you downloaded or cloned the repository, install its dependencies:

```bash
npm install
```

For a clean install using the committed lockfile, use:

```bash
npm ci
```

## Run locally

Start the Vite development server:

```bash
npm run dev
```

Open the local URL printed in the terminal, usually [http://localhost:5173](http://localhost:5173).
Stop the server with `Ctrl+C`.

## Other commands

```bash
npm run lint     # Check the source with ESLint
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
```

Run `npm run build` before `npm run preview`.

## Technologies

- React 19 and JavaScript with JSX
- Vite 8 for local development and production builds
- Tailwind CSS 4 Vite integration, with custom responsive CSS
- JSON for the local assessment question bank
- Browser `localStorage` for saving and restoring assessment progress

## Project structure

```text
src/
├── App.jsx                         # App entry component
├── main.jsx                        # React DOM bootstrap and global styles
├── index.css                       # Global page styles
├── data/
│   └── questions.json              # Questions, options, answers, explanations
└── features/
    └── assessment/
        ├── AssessmentApp.jsx        # Connects assessment state and screens
        ├── assessment.css           # Assessment-specific styles
        ├── assessmentState.js       # Reducer, timer, persistence, helpers
        └── components/
            ├── AssessmentScreen.jsx
            ├── QuestionCard.jsx
            ├── QuestionNavigator.jsx
            ├── ResultsScreen.jsx
            ├── ReviewItem.jsx
            ├── SiteFooter.jsx
            ├── SiteHeader.jsx
            └── StartScreen.jsx
```

## Important implementation details

- **One reducer manages quiz state.** `assessmentState.js` uses React's
  `useReducer` to track the current screen, current question, selected answers,
  and time remaining. User actions such as `START`, `SELECT_ANSWER`, `SUBMIT`,
  and `RESTART` are handled centrally by the reducer.
- **The timer runs only during the assessment.** A one-second interval dispatches
  a `TICK` action while the assessment is active. Reaching zero submits the
  assessment automatically; the interval is cleaned up when the screen changes.
- **Progress is stored in the browser.** The current state is saved under the
  `aimerz-assessment-state` key in `localStorage` and restored on page load.
  Clearing site data in the browser also clears this saved progress.
- **Questions are data-driven.** Edit `src/data/questions.json` to change the
  question text, options, correct answer index, or explanation. Answer indexes
  start at `0` (the first option).
- **Results stay on the same page.** Submitting shows the score and a review
  containing the user's answer, correct answer when needed, and explanation.
- **Vite's cache uses the OS temp directory.** `vite.config.js` sets a temporary
  cache location to avoid permission errors deleting `node_modules/.vite` on
  some Windows setups. The React and Tailwind plugins are expanded into the
  plugin list for compatibility with the configured Vite version.
