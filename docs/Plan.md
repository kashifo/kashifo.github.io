Hi-Tech GitHub Portfolio Website
Open-source portfolio using widget services (no API calls needed).

Widget Services Used
Widget	Service URL
Streak Stats	https://kashifo-github-readme-stats.vercel.app/
GitHub Stats	https://github-readme-stats.vercel.app/api
Repo Cards	https://github-readme-stats-plus.vercel.app/api/pin/
StackOverflow	https://github-readme-stackoverflow-kashifo.vercel.app/
Contribution Graph	https://github-contributions.vercel.app/api/v1/kashifo
Project Structure
kashifo.github.io/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Dark theme layout
│   │   ├── page.tsx        # Main page
│   │   └── globals.css     # Styles
│   ├── components/
│   │   ├── HeroSection.tsx # Profile + stats widgets
│   │   ├── TechFilter.tsx  # Rounded tech pills
│   │   └── RepoSection.tsx # Repo cards by category
│   └── lib/
│       └── data.ts         # Static repo/tech config
├── LICENSE, README.md, CONTRIBUTING.md
Features
Hero Section
Profile info (static)
Streak stats widget
GitHub stats widget
Contribution graph from sallar's service
Tech Pills
Horizontal scrollable rounded pills
Static list: TypeScript, JavaScript, Dart, Java, Kotlin, React, Flutter, Next.js
Click to scroll to that section
Repo Sections
Grouped by technology/category
Using github-readme-stats-plus.vercel.app/api/pin/ cards
Static repo list (like your README)