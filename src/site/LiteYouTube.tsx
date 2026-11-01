import { useState } from "react";

// Shows a thumbnail first and only loads YouTube when someone presses play.
export default function LiteYouTube({ id }: { id: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="video-frame"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title="Andrew Scratch video"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button className="video-thumb" onClick={() => setPlaying(true)} aria-label="Play video">
      <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
      <span className="video-play" aria-hidden="true" />
    </button>
  );
}
