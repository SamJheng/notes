import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import Presentation from "./Presentation";
import { slides as atomicSlides } from "./topics/atomic-habits/slides";
import { slides as vibeCodingSlides } from "./topics/vibe-coding/slides";
import { slides as middleDevLoopSlides } from "./topics/middle-dev-loop/slides";
import "./index.css";

function AtomicHabits() {
  const navigate = useNavigate();
  return (
    <Presentation
      slides={atomicSlides}
      title="原子習慣"
      onBack={() => navigate("/")}
    />
  );
}

function VibeCoding() {
  const navigate = useNavigate();
  return (
    <Presentation
      slides={vibeCodingSlides}
      title="Vibe Coding"
      onBack={() => navigate("/")}
    />
  );
}

function MiddleDevLoop() {
  const navigate = useNavigate();
  return (
    <Presentation
      slides={middleDevLoopSlides}
      title="中層開發迴圈"
      onBack={() => navigate("/")}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atomic-habits" element={<AtomicHabits />} />
        <Route path="/vibe-coding" element={<VibeCoding />} />
        <Route path="/middle-dev-loop" element={<MiddleDevLoop />} />
      </Routes>
    </BrowserRouter>
  );
}
