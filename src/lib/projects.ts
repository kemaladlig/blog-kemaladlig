export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  highlights?: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
}

/**
 * Single source of truth for project data.
 * Rendered by both the home page (featured subset) and /projects (full list).
 * Wording is kept in sync with the CV at cv-2026/kemal-adlig-cv.html.
 */
export const projects: Project[] = [
  {
    id: "code-rag",
    title: "code-rag",
    tagline: "MCP Server for Semantic Code Search",
    description:
      "Local MCP server that lets an agent find code by meaning before it reads files. One install serves every client, from Claude Code to Cursor and VS Code.",
    tags: ["TypeScript", "Node", "MCP", "SQLite", "Embeddings"],
    highlights: ["94% recall@5", "No npm dependencies", "112s full index"],
    repo: "https://github.com/kemaladlig/code-rag",
    featured: true,
  },
  {
    id: "brutal-party",
    title: "Brutal Party",
    tagline: "Real-Time Multiplayer Party Platform",
    description:
      "Four-player party mini-games in a single lightweight app, with 15 game engines and three networking modes running off one codebase.",
    tags: ["Vanilla ES Modules", "WebRTC", "Supabase", "WebSocket"],
    highlights: ["15 game engines", "453 unit tests", "WebRTC peer-to-peer"],
    repo: "https://github.com/kemaladlig/brutal-party",
    featured: true,
  },
  {
    id: "fisaktar",
    title: "FişAktar",
    tagline: "AI Document Processing for Accounting Firms",
    description:
      "Turkish SaaS that reads receipts and invoices arriving through WhatsApp and the web, then exports balanced journal entries in the formats Luca and Zirve accept.",
    tags: ["Next.js", "Supabase", "Gemini Vision", "TypeScript"],
    highlights: ["Model fallback chain", "Excel and XML export", "Second-per-receipt"],
  },
  {
    id: "screen-translator",
    title: "Screen Translator",
    tagline: "Real-Time Game Overlay",
    description:
      "Windows tool that finds foreign-language text in full-screen games and paints each translation over the original pixels. The overlay is click-through, so the game stays playable underneath.",
    tags: ["Python", "PyQt6", "ONNX Runtime", "RapidOCR"],
    highlights: ["On-device OCR", "Win32 click-through", "~1,600 lines"],
    repo: "https://github.com/kemaladlig/screen-translator",
    featured: true,
  },
  {
    id: "vault-note",
    title: "VaultNote",
    tagline: "Zero-Server Encrypted Notes",
    description:
      "Notes app where data lives in the user's own Google Drive appDataFolder, so only ciphertext ever leaves the device.",
    tags: ["React 19", "Capacitor", "WebCrypto", "Argon2id"],
    highlights: ["AES-256-GCM", "66 unit tests", "17 e2e flows"],
    repo: "https://github.com/kemaladlig/vault-note",
    featured: true,
  },
  {
    id: "gods-of-rift",
    title: "Gods of Rift",
    tagline: "Deterministic Strategy RPG",
    description:
      "Game logic sits in a dependency-free pure-TypeScript core, so the same seed always produces the same battle, and a PixiJS engine replays each simulation as a skippable animation.",
    tags: ["Bun", "TypeScript", "PixiJS", "Monorepo"],
  },
  {
    id: "ata-akademi",
    title: "ATA Akademi",
    tagline: "Scheduling and Billing Platform",
    description:
      "Arts academy platform where authorization is enforced by PostgreSQL Row Level Security, and a make-up-lesson algorithm picks the instructor's adjacent free slots.",
    tags: ["React 19", "Supabase", "PostgreSQL", "RLS"],
  },
  {
    id: "kpsarena",
    title: "KpssArena",
    tagline: "Offline-First Exam Prep",
    description:
      "Exam preparation app with a SQLite and Drizzle store that syncs to Postgres through cloudId mapping, plus competitive modes served by an Edge Functions ghost opponent.",
    tags: ["Expo", "Supabase", "Drizzle", "RevenueCat"],
  },
  {
    id: "rahmet-eli",
    title: "Rahmet Eli",
    tagline: "Published Mobile App",
    description:
      "Islamic companion app with prayer times, Qibla compass and content feeds, shipped through App Store and Google Play review.",
    tags: ["React Native", "Expo", "Firebase", "Push Notifications"],
    highlights: ["Live on both stores", "Location-aware"],
    demo: "https://play.google.com/store/apps/details?id=com.rahmeteli.app",
  },
  {
    id: "kubectl-command-tool",
    title: "Kubectl Command Tool",
    tagline: "Kubernetes Reference on GKE",
    description:
      "Kubectl command discovery with fuzzy search, deployed to Google Kubernetes Engine behind Docker, GitHub Actions CI/CD and Nginx Ingress with TLS.",
    tags: ["React", "Node.js", "Docker", "Kubernetes"],
    repo: "https://github.com/kemaladlig/KubectlCommandTool",
  },
  {
    id: "tracex",
    title: "TraceX",
    tagline: "Zero-Backend Crypto Terminal",
    description:
      "Crypto tracker and portfolio SPA reading live Binance WebSocket streams and on-chain MVRV feeds, with no backend of its own.",
    tags: ["React", "TypeScript", "WebSocket", "Lightweight Charts"],
    repo: "https://github.com/kemaladlig/tracex",
  },
  {
    id: "edgebar",
    title: "EdgeBar",
    tagline: "Chrome Extension",
    description:
      "Arc and Raycast inspired vertical workspace with closable tabs and an AI companion, built on Manifest V3 with no runtime dependencies.",
    tags: ["Manifest V3", "TypeScript", "Chrome Extensions"],
    repo: "https://github.com/kemaladlig/edgebar",
  },
  {
    id: "exam-timer",
    title: "Exam Timer",
    tagline: "Installable PWA",
    description:
      "Exam countdown PWA with presets for YKS, TYT, AYT, KPSS, ALES and LGS, built to work offline on a phone.",
    tags: ["PWA", "TypeScript", "Offline"],
    repo: "https://github.com/kemaladlig/exam-timer",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const otherProjects = projects.filter((project) => !project.featured);
