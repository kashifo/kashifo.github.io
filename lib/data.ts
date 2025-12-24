// Static data for the portfolio - no API calls needed

export const GITHUB_USERNAME = "kashifo";

export const PROFILE = {
    name: "Kashif Anwaar",
    title: "Technologist, Software & Product Enthusiast, Coding Hobbyist",
    bio: "Tech, Computers, & Software are my passion, developing software is my hobby. Currently building Social Nest AI.",
    socialNestUrl: "https://socialnestai.com/",
    cvUrl: "https://thekashif.web.app/",
    githubUrl: "https://github.com/kashifo",
    avatarUrl: "https://avatars.githubusercontent.com/u/13944934?v=4",
};

export const WIDGET_URLS = {
    streakStats: `https://kashifo-github-readme-stats.vercel.app/?user=${GITHUB_USERNAME}&theme=vue-dark&background=45%2CE96443%2C904E95&currStreakLabel=EBEBEB&sideLabels=EBEBEB&sideNums=EBEBEB&currStreakNum=EBEBEB&ring=EBEBEB&fire=FC6400&card_height=220`,
    githubStats: `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&locale=en&rank_icon=github&include_all_commits=true&bg_color=30,e96443,904e95&title_color=fff&text_color=fff&icon_color=fff`,
    contributionGraph: `https://github-contributions.vercel.app/api/v1/${GITHUB_USERNAME}`,
    stackOverflow: `https://github-readme-stackoverflow-kashifo.vercel.app/?userID=4034209&layout=full&theme=dark`,
    repoCard: (repo: string) => `https://github-readme-stats-plus.vercel.app/api/pin/?username=${GITHUB_USERNAME}&repo=${repo}&theme=dark&bg_color=0d1117&border_color=30363d`,
};

export const TECHNOLOGIES = [
    { name: "TypeScript", icon: "typescript", color: "#3178c6" },
    { name: "JavaScript", icon: "javascript", color: "#f7df1e" },
    { name: "React", icon: "react", color: "#61dafb" },
    { name: "Next.js", icon: "nextjs", color: "#ffffff" },
    { name: "Flutter", icon: "flutter", color: "#02569b" },
    { name: "Dart", icon: "dart", color: "#0175c2" },
    { name: "Kotlin", icon: "kotlin", color: "#7f52ff" },
    { name: "Java", icon: "java", color: "#f89820" },
    { name: "Android", icon: "android", color: "#3ddc84" },
    { name: "Python", icon: "python", color: "#3776ab" },
    { name: "C#", icon: "csharp", color: "#239120" },
    { name: "PHP", icon: "php", color: "#777bb4" },
];

export interface RepoInfo {
    name: string;
    category: string;
    description?: string;
    featured?: boolean;
}

export const REPOSITORIES: RepoInfo[] = [
    // Featured
    { name: "android-folder-picker-library", category: "Android", featured: true, description: "Popular Android library (78+ stars)" },
    { name: "flutter-books-app", category: "Flutter", featured: true, description: "Flutter app on Google Books API" },

    // Android/Java
    { name: "FacebookNotifications", category: "Android", description: "First open-source contribution (2016)" },
    { name: "Picsr", category: "Android", description: "Early Android project (2016)" },
    { name: "NotesApp", category: "Android" },

    // Kotlin
    { name: "KotlinCats", category: "Kotlin", description: "First Kotlin project" },
    { name: "modern-android", category: "Kotlin" },

    // Flutter/Dart
    { name: "hello-flutter", category: "Flutter", description: "First Flutter project" },
    { name: "flutter-ui-collection", category: "Flutter" },

    // Web/React/Next.js
    { name: "odictionary", category: "Web", description: "First web app (2016)" },
    { name: "nextjs-firestore-crud", category: "Next.js" },
    { name: "date-cal", category: "React" },

    // Games
    { name: "cubethon", category: "Unity", description: "Unity 3D game" },
];

export const REPO_CATEGORIES = [
    "All",
    "Featured",
    "Android",
    "Flutter",
    "Kotlin",
    "React",
    "Next.js",
    "Web",
    "Unity",
];
