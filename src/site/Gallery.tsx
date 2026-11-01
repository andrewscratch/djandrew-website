import { useRef, useState } from "react";
import g1 from "../assets/site/g1.jpg";
import g2 from "../assets/site/g2.jpg";
import g3 from "../assets/site/g3.jpg";
import g4 from "../assets/site/g4.jpg";
import g5 from "../assets/site/g5.jpg";
import g6 from "../assets/site/g6.jpg";
import g7 from "../assets/site/g7.jpg";

const photos = [
  { src: g1, alt: "Andrew at the decks under blue light" },
  { src: g2, alt: "Andrew scratching on turntables in a club" },
  { src: g3, alt: "Andrew at a Pioneer setup by a brick wall" },
  { src: g4, alt: "Black and white shot of Andrew behind the decks" },
  { src: g5, alt: "Andrew playing at OneMore club" },
  { src: g6, alt: "Andrew at Morgan Club" },
  { src: g7, alt: "Crowd at Morgan Club during Andrew's set" },
];

export default function Gallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<(typeof photos)[number] | null>(null);

  const show = (p: (typeof photos)[number]) => {
    setOpen(p);
    dialog.current?.showModal();
  };

  return (
    <>
      <div className="gallery">
        {photos.map((p, i) => (
          <button key={p.src} className={`gallery-item g${i + 1}`} onClick={() => show(p)}>
            <img src={p.src} alt={p.alt} loading="lazy" />
          </button>
        ))}
      </div>
      <dialog ref={dialog} className="lightbox" onClick={() => dialog.current?.close()}>
        {open && <img src={open.src} alt={open.alt} />}
        <button className="lightbox-close" aria-label="Close photo">
          Close
        </button>
      </dialog>
    </>
  );
}
