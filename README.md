# Project Overview

RDG landing page

# Documentation

## Code Structure

The codebase is organized as follows:

-   `/app`: Contains the pages routes, i18n(internalization) and css design
-   `/components`: Reusable UI components, sections, pages and functions.
-   `/utils`: Utility functions.
-   `/constants`: All cards, blocks, content, components data, used i18n for language switching.
-   `/messages`: All text content there, en/ru content for changing languages

## How the Code Works

1.  **Initialization**: Loading from /app and all pages there
2.  **Data Fetching**: It fetches data from /constants, and constants fetches data from /messages
3.  **Data Processing**: The fetched data is then processed and transformed according to the design: blocks, cards, components, e.t.c.
4.  **Rendering**: Finally, the processed data is rendered using React.js renderer


**Visualized working code**: <a href="https://drive.google.com/file/d/1qoU3q1YemrAPcp1_z2juxZKCLRA7YGHP/view?usp=sharing">Source</a><br/>
**Preview:** <image src="./public/docs/image.png" alt="docs" />
## Design

The project follows a FSD(feature sliced design) architecture. It emphasizes scalability, maintainability

## Tech Stack

-   **Frontend**: React.js, Next.js.
-   **Design**: Tailwind CSS, CSS, Shadcn ui.
-   **Animation**: Framer motion, GSAP.
-   **Internalization**: next-intl.

## Apply content changes

All content changes could be done on:
-   `/components`
-   `   |-/pages`
-   `   |-/sections`
-   `   |-/shared`
-   `/messages`
-   `/constants`

Do all changes respectfully.

## Installation

1.  **Clone the Repository**: `git clone https://github.com/ssaintx/RDG`
2.  **Navigate to the Project**: `cd RDG`
3.  **Install Dependencies**: `npm install` or `yarn install`

## Building

-   **Development**: `npm start` or `yarn start`
-   **Production**: `npm run build` or `yarn build`

## Deployment

1.  **Build the Project**: `npm run build`
2.  **Deploy**: [Describe the deployment process, e.g., using Docker, Heroku, AWS].
3. **Configuration**: set up environment variables according to your prod config

## Sources

-   **i18n documentation**: <a href="https://next-intl.dev/">source</a>
-   **Framer motion documentation**: <a href="https://motion.dev/docs">source</a>
-   **Gsap documentation**: <a href="https://gsap.com/docs/v3/">source</a>
-   **Tailwind documentation**: <a href="https://tailwindcss.com/docs/installation/using-vite">source</a>
-   **Shadcn ui documentation**: <a href="https://ui.shadcn.com/docs">source</a>