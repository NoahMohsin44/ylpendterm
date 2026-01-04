# End of Term Assignment - Interactive Website

This is a React application built with Vite and Framer Motion for your end of term assignment.

## Prerequisites

It seems Node.js is not currently installed on your system. To run this project, you will need to install Node.js.
1. Download a pre-built installer for Windows from: https://nodejs.org/
2. Run the installer and follow the instructions.

## How to Run

Once Node.js is installed, open your terminal (PowerShell or Command Prompt) in this directory (`site`) and run:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

This will give you a local URL (like `http://localhost:5173`) to view your website.

## Editing Content

 - Edit `src/App.jsx` to change the video titles or descriptions.
 - Edit `src/components/` to change the layout.
 - The videos are currently placeholders. To add real video functionality, you would replace the "Play" button in `VideoCard.jsx` with an `<iframe />` or `<video />` tag linking to your files.

## Project Structure

- `src/components/Hero.jsx`: The intro screen.
- `src/components/Intro.jsx`: The scrolling text section.
- `src/components/CoursePlaylist.jsx`: The layout for each module.
- `src/index.css`: The styling (Dark mode, premium fonts).
