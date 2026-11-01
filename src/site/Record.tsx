// The spinning record in the hero. Side A label, grooves, curved text.
export default function Record() {
  return (
    <svg className="record" viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <path id="label-arc" d="M100,100 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0" />
      </defs>
      <circle cx="100" cy="100" r="99" fill="#16100f" />
      {[92, 86, 80, 74, 68, 62, 56].map((r) => (
        <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#2a2020" strokeWidth="1" />
      ))}
      <path d="M100 4 A96 96 0 0 1 178 46" stroke="rgba(255,255,255,0.18)" strokeWidth="3" fill="none" />
      <circle cx="100" cy="100" r="46" fill="var(--blush)" />
      <text className="record-arc">
        <textPath href="#label-arc">Andrew Scratch · Step2Dark · Side A ·</textPath>
      </text>
      <text x="100" y="112" textAnchor="middle" className="record-a">A</text>
      <circle cx="100" cy="100" r="3.5" fill="#16100f" />
    </svg>
  );
}
