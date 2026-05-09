import { useNavigate } from "react-router-dom";

const topics = [
  {
    path: "/atomic-habits",
    emoji: "⚛️",
    title: "原子習慣",
    subtitle: "Atomic Habits",
    author: "James Clear",
    slides: 11,
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    path: "/vibe-coding",
    emoji: "🎵",
    title: "Vibe Coding",
    subtitle: "用 AI 對話寫程式的新方式",
    author: "AI 開發新浪潮",
    slides: 10,
    gradient: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
  },
  {
    path: "/middle-dev-loop",
    emoji: "🍳",
    title: "中層開發迴圈",
    subtitle: "多代理 AI 協作實戰 — Chapter 15",
    author: "讀書心得筆記",
    slides: 20,
    gradient: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-header">
        <div className="home-logo">📚</div>
        <h1 className="home-title">書籍筆記簡報</h1>
        <p className="home-subtitle">選擇一個主題開始瀏覽</p>
      </div>

      <div className="topic-grid">
        {topics.map((t) => (
          <button
            key={t.path}
            className="topic-card"
            style={{ background: t.gradient }}
            onClick={() => navigate(t.path)}
          >
            <span className="topic-emoji">{t.emoji}</span>
            <span className="topic-title">{t.title}</span>
            <span className="topic-subtitle">{t.subtitle}</span>
            <span className="topic-author">{t.author}</span>
            <span className="topic-count">{t.slides} 張投影片</span>
          </button>
        ))}
      </div>

      <p className="home-hint">點擊卡片進入簡報</p>
    </div>
  );
}
