import { useState, useEffect, useCallback } from "react";

/* ── Slide type renderers ── */

function CoverSlide({ slide }) {
  return (
    <div className="slide-content cover">
      <div className="cover-emoji">{slide.emoji}</div>
      <h1 className="cover-title">{slide.title}</h1>
      <h2 className="cover-subtitle">{slide.subtitle}</h2>
      <p className="cover-author">{slide.author}</p>
      <div className="cover-tagline">{slide.tagline}</div>
    </div>
  );
}

function AuthorSlide({ slide }) {
  return (
    <div className="slide-content">
      <div className="slide-emoji">{slide.emoji}</div>
      <h2 className="slide-title">{slide.title}</h2>
      <h3 className="author-name">{slide.name}</h3>
      <ul className="point-list">
        {slide.points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
}

function ConceptSlide({ slide }) {
  return (
    <div className="slide-content concept">
      <div className="slide-emoji">{slide.emoji}</div>
      <h2 className="slide-title">{slide.title}</h2>
      <div className="concept-headline">{slide.headline}</div>
      <div className="concept-math">{slide.math}</div>
      <div className="concept-desc">{slide.description}</div>
      <p className="concept-detail">{slide.detail}</p>
    </div>
  );
}

function OverviewSlide({ slide }) {
  return (
    <div className="slide-content">
      <div className="slide-emoji">{slide.emoji}</div>
      <h2 className="slide-title">{slide.title}</h2>
      <p className="slide-subtitle">{slide.subtitle}</p>
      <div className="laws-grid">
        {slide.laws.map((law) => (
          <div className="law-card" key={law.num}>
            <span className="law-icon">{law.icon}</span>
            <span className="law-num">法則 {law.num}</span>
            <span className="law-label">{law.label}</span>
            <span className="law-eng">{law.eng}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LawSlide({ slide }) {
  return (
    <div className="slide-content">
      <div className="law-badge">{slide.lawNum}</div>
      <div className="slide-emoji">{slide.emoji}</div>
      <h2 className="slide-title">{slide.title}</h2>
      <p className="law-subtitle">{slide.subtitle}</p>
      <ul className="point-list">
        {slide.points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
      <div className="example-box">{slide.example}</div>
    </div>
  );
}

function LoopSlide({ slide }) {
  return (
    <div className="slide-content">
      <div className="slide-emoji">{slide.emoji}</div>
      <h2 className="slide-title">{slide.title}</h2>
      <p className="slide-subtitle">{slide.subtitle}</p>
      <div className="loop-steps">
        {slide.steps.map((step, i) => (
          <div className="loop-step" key={i}>
            <span className="loop-icon">{step.icon}</span>
            <span className="loop-label">{step.label}</span>
            <span className="loop-desc">{step.desc}</span>
            {i < slide.steps.length - 1 && <span className="loop-arrow">→</span>}
          </div>
        ))}
      </div>
      <div className="loop-note">{slide.note}</div>
    </div>
  );
}

function TakeawaySlide({ slide }) {
  return (
    <div className="slide-content">
      <div className="slide-emoji">{slide.emoji}</div>
      <h2 className="slide-title">{slide.title}</h2>
      <div className="quotes-list">
        {slide.quotes.map((q, i) => (
          <div className="quote-card" key={i}>
            <p className="quote-text">「{q.text}」</p>
            <p className="quote-en">{q.en}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function EndSlide({ slide }) {
  return (
    <div className="slide-content end">
      <div className="slide-emoji">{slide.emoji}</div>
      <h2 className="slide-title">{slide.title}</h2>
      <ul className="point-list end-steps">
        {slide.steps.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
      <div className="end-closing">{slide.closing}</div>
    </div>
  );
}

/* vibe-coding specific types */
function WhatSlide({ slide }) {
  return (
    <div className="slide-content">
      <div className="slide-emoji">{slide.emoji}</div>
      <h2 className="slide-title">{slide.title}</h2>
      <p className="concept-detail">{slide.description}</p>
      <ul className="point-list">
        {slide.points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
}

function BenefitSlide({ slide }) {
  return (
    <div className="slide-content">
      <div className="slide-emoji">{slide.emoji}</div>
      <h2 className="slide-title">{slide.title}</h2>
      <div className="concept-headline">{slide.headline}</div>
      <ul className="point-list">
        {slide.points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
      <div className="example-box">{slide.example}</div>
    </div>
  );
}

function ToolsSlide({ slide }) {
  return (
    <div className="slide-content">
      <div className="slide-emoji">{slide.emoji}</div>
      <h2 className="slide-title">{slide.title}</h2>
      <div className="tools-list">
        {slide.tools.map((t, i) => (
          <div className="tool-card" key={i}>
            <span className="tool-icon">{t.icon}</span>
            <span className="tool-name">{t.name}</span>
            <span className="tool-desc">{t.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MindsetSlide({ slide }) {
  return (
    <div className="slide-content">
      <div className="slide-emoji">{slide.emoji}</div>
      <h2 className="slide-title">{slide.title}</h2>
      <div className="comparison-list">
        {slide.comparisons.map((c, i) => (
          <div className="comparison-row" key={i}>
            <span className="comp-before">{c.before}</span>
            <span className="comp-arrow">➜</span>
            <span className="comp-after">{c.after}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideRenderer({ slide }) {
  switch (slide.type) {
    case "cover":    return <CoverSlide slide={slide} />;
    case "author":   return <AuthorSlide slide={slide} />;
    case "concept":  return <ConceptSlide slide={slide} />;
    case "overview": return <OverviewSlide slide={slide} />;
    case "law":      return <LawSlide slide={slide} />;
    case "loop":     return <LoopSlide slide={slide} />;
    case "takeaway": return <TakeawaySlide slide={slide} />;
    case "what":     return <WhatSlide slide={slide} />;
    case "benefit":  return <BenefitSlide slide={slide} />;
    case "tools":    return <ToolsSlide slide={slide} />;
    case "mindset":  return <MindsetSlide slide={slide} />;
    case "end":      return <EndSlide slide={slide} />;
    default:         return null;
  }
}

/* ── Main Presentation component ── */
export default function Presentation({ slides, title, onBack }) {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent((c) => Math.min(total - 1, c + 1)), [total]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     onBack?.();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next, onBack]);

  const slide = slides[current];

  return (
    <div className="presentation" style={{ background: slide.gradient }}>
      <div className="pres-topbar">
        <button className="back-btn" onClick={onBack}>← 返回首頁</button>
        <span className="pres-title">{title}</span>
        <span style={{ width: 100 }} />
      </div>

      <div className="slide-wrapper">
        <SlideRenderer key={current} slide={slide} />
      </div>

      <div className="controls">
        <button className="nav-btn" onClick={prev} disabled={current === 0}>
          ← 上一頁
        </button>

        <div className="progress">
          <div className="progress-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`投影片 ${i + 1}`}
              />
            ))}
          </div>
          <span className="progress-text">{current + 1} / {total}</span>
        </div>

        <button className="nav-btn" onClick={next} disabled={current === total - 1}>
          下一頁 →
        </button>
      </div>

      <div className="keyboard-hint">← → 切換　Esc 返回</div>
    </div>
  );
}
