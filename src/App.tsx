import { useState } from "react";
import {
  FaSpotify,
  FaApple,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa";
import heroImg from "./assets/site/hero.jpg";
import djImg from "./assets/site/dj.jpg";
import portraitImg from "./assets/site/portrait.jpg";
import Record from "./site/Record";
import LiteYouTube from "./site/LiteYouTube";
import Gallery from "./site/Gallery";
import {
  links,
  nextRelease,
  releases,
  mixes,
  videoIds,
} from "./site/content";

const nav = [
  { href: "#producer", label: "Producer" },
  { href: "#dj", label: "DJ" },
  { href: "#watch", label: "Watch" },
  { href: "#story", label: "Story" },
  { href: "#learn", label: "Learn" },
  { href: "#contact", label: "Contact" },
];

const isOut = new Date() >= new Date(nextRelease.date);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="topbar">
        <a href="#top" className="wordmark">
          Andrew Scratch
        </a>
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className={menuOpen ? "nav open" : "nav"}>
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main">
        {/* HERO */}
        <section id="top" className="hero">
          <img className="hero-photo" src={heroImg} alt="Andrew Scratch in the studio" />
          <div className="hero-inner">
            <h1 className="hero-name">
              <span>Andrew</span>
              <span>Scratch</span>
            </h1>
            <p className="hero-sub">
              UK Garage and Drum &amp; Bass producer. Turntablist since 2001.
              <br />
              On the decks as DJ Andrew.
            </p>
          </div>

          <aside className="release" aria-label="Next release">
            <Record />
            <div className="release-text">
              <p className="release-kicker">New single on {nextRelease.label}</p>
              <p className="release-date">{isOut ? "Out now" : `Out ${nextRelease.dateText}`}</p>
              <div className="release-actions">
                <a className="btn btn-red" href={links.spotify} target="_blank" rel="noopener noreferrer">
                  <FaSpotify aria-hidden="true" /> {isOut ? "Listen on Spotify" : "Follow on Spotify"}
                </a>
                <a className="btn btn-ghost" href={links.apple} target="_blank" rel="noopener noreferrer">
                  <FaApple aria-hidden="true" /> Apple Music
                </a>
              </div>
            </div>
          </aside>
        </section>

        {/* SIDE A — PRODUCER */}
        <section id="producer" className="side side-a">
          <div className="side-head">
            <span className="side-letter" aria-hidden="true">A</span>
            <div>
              <h2>The producer</h2>
              <p className="lead">
                As Andrew Scratch, he makes UK Garage, 2-step and Drum &amp; Bass:
                swung drums, deep subs and a turntablist&rsquo;s ear for a cut.
              </p>
            </div>
          </div>

          <div className="side-a-grid">
            <iframe
              className="spotify"
              src={links.spotifyEmbed}
              title="Andrew Scratch on Spotify"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
            <div>
              <h3>Releases</h3>
              <ol className="tracklist">
                <li className="track upcoming">
                  <span className="track-title">New single</span>
                  <span className="track-meta">
                    {nextRelease.label}, {nextRelease.dateText}
                  </span>
                </li>
                {releases.map((r) => (
                  <li className="track" key={r.title}>
                    <a href={r.url} target="_blank" rel="noopener noreferrer" className="track-title">
                      {r.title}
                    </a>
                    <span className="track-meta">{r.year}</span>
                  </li>
                ))}
              </ol>
              <p className="small">
                Every release is on{" "}
                <a href={links.spotify} target="_blank" rel="noopener noreferrer">Spotify</a>,{" "}
                <a href={links.apple} target="_blank" rel="noopener noreferrer">Apple Music</a> and
                all major stores.
              </p>
            </div>
          </div>
        </section>

        {/* SIDE B — DJ */}
        <section id="dj" className="side side-b">
          <div className="side-head">
            <span className="side-letter" aria-hidden="true">B</span>
            <div>
              <h2>The DJ</h2>
              <p className="lead">
                More than twenty years behind the decks as DJ Andrew, mostly Hip-Hop
                and R&rsquo;n&rsquo;B, with scratching at the heart of every set.
              </p>
            </div>
          </div>

          <div className="side-b-grid">
            <figure className="dj-photo">
              <img src={djImg} alt="DJ Andrew scratching in a smoky club" loading="lazy" />
            </figure>
            <div className="dj-copy">
              <ul className="facts">
                <li>Eight years as the DJ for TNMK, plus VovaZiLvova and D&rsquo;lemma</li>
                <li>Organised the Ukrainian Scratch Championship, supported by DJ Rafik and Q&#8209;Bert</li>
                <li>Winner of several DJ competitions</li>
                <li>Plays clubs, festivals and private events in Cyprus and abroad</li>
              </ul>
              <a
                className="btn btn-blush"
                href={`mailto:${links.email}?subject=Booking%20DJ%20Andrew`}
              >
                <FaEnvelope aria-hidden="true" /> Email for bookings
              </a>

              <h3>Mixes</h3>
              <div className="mixes">
                {mixes.map((m) => (
                  <iframe key={m} className="mix" src={m} title="DJ Andrew mix on Mixcloud" loading="lazy" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WATCH */}
        <section id="watch" className="block watch">
          <h2>Watch</h2>
          <p className="lead narrow">Scratch routines, sets and studio clips.</p>
          <div className="videos">
            {videoIds.map((id) => (
              <LiteYouTube key={id} id={id} />
            ))}
          </div>
          <a className="btn btn-ink" href={links.youtube} target="_blank" rel="noopener noreferrer">
            <FaYoutube aria-hidden="true" /> Subscribe on YouTube
          </a>
        </section>

        {/* STORY */}
        <section id="story" className="block story">
          <img className="story-photo" src={portraitImg} alt="Portrait of Andrew" loading="lazy" />
          <div className="story-copy">
            <h2>The story so far</h2>
            <p>
              Andrew started DJing in 2001 and became one of Ukraine&rsquo;s leading
              Hip-Hop and R&rsquo;n&rsquo;B DJs. He toured with TNMK for eight years,
              built the Ukrainian Scratch Championship, and founded DJ Academy, which
              now teaches in Kyiv, Limassol and online. Today he releases UK Garage and Drum &amp; Bass as Andrew Scratch, plays
              at events and runs DJ masterclasses.
            </p>
            <details>
              <summary>Read the full bio</summary>
              <p>
                His talent and dedication earned him recognition in championships, where
                he won several competitions. Andrew organised the Ukrainian Scratch
                Championship, with support from renowned DJs such as DJ Rafik and
                Q-Bert, to push the art of DJing forward in Ukraine.
              </p>
              <p>
                A major chapter of his career was playing as the DJ in bands like
                VovaZiLvova, D&rsquo;lemma and the well-known Ukrainian band TNMK, where
                he spent over eight years. His DJ Academy, in Kyiv, Limassol and online,
                brings experienced DJs and producers together with new talent from
                around the world.
              </p>
            </details>
          </div>
        </section>

        {/* LEARN */}
        <section id="learn" className="block learn">
          <h2>Learn with Andrew</h2>
          <ul className="learn-list">
            <li>
              <a href={links.academyCy} target="_blank" rel="noopener noreferrer">
                <span className="learn-name">DJ Academy Limassol</span>
                <span className="learn-desc">DJ lessons in person in Limassol, Cyprus</span>
              </a>
            </li>
            <li>
              <a href={links.academyUa} target="_blank" rel="noopener noreferrer">
                <span className="learn-name">DJ Academy Kyiv</span>
                <span className="learn-desc">DJ and production courses in Kyiv and online</span>
              </a>
            </li>
            <li>
              <a href={links.udemy} target="_blank" rel="noopener noreferrer">
                <span className="learn-name">Scratch course on Udemy</span>
                <span className="learn-desc">From baby scratch to flares and orbits, at your own pace</span>
              </a>
            </li>
          </ul>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="block gallery-block">
          <h2>Gallery</h2>
          <Gallery />
        </section>

        {/* CONTACT */}
        <section id="contact" className="block contact">
          <h2>Follow and get in touch</h2>
          <div className="contact-grid">
            <a href={links.instaProducer} target="_blank" rel="noopener noreferrer">
              <FaInstagram aria-hidden="true" />
              <span>
                <strong>@andrewscratch</strong>
                <em>Producer: new tracks and studio</em>
              </span>
            </a>
            <a href={links.instaDj} target="_blank" rel="noopener noreferrer">
              <FaInstagram aria-hidden="true" />
              <span>
                <strong>@i_am_djandrew</strong>
                <em>DJ and teacher: sets, gigs, academy</em>
              </span>
            </a>
            <a href={links.spotify} target="_blank" rel="noopener noreferrer">
              <FaSpotify aria-hidden="true" />
              <span>
                <strong>Spotify</strong>
                <em>Follow to hear new releases first</em>
              </span>
            </a>
            <a href={links.youtube} target="_blank" rel="noopener noreferrer">
              <FaYoutube aria-hidden="true" />
              <span>
                <strong>YouTube</strong>
                <em>Tutorials, routines and mixes</em>
              </span>
            </a>
            <a href={links.telegram} target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane aria-hidden="true" />
              <span>
                <strong>Telegram</strong>
                <em>Release news and updates</em>
              </span>
            </a>
            <a href={`mailto:${links.email}`}>
              <FaEnvelope aria-hidden="true" />
              <span>
                <strong>Email</strong>
                <em>{links.email}</em>
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Andrew Scratch</span>
        <a href={links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}

export default App;
