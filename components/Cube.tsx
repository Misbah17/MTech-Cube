export default function Cube({ size = 280 }: { size?: number }) {
  const half = size / 2;
  const faces: { transform: string }[] = [
    { transform: `translateZ(${half}px)` },
    { transform: `rotateY(180deg) translateZ(${half}px)` },
    { transform: `rotateY(90deg) translateZ(${half}px)` },
    { transform: `rotateY(-90deg) translateZ(${half}px)` },
    { transform: `rotateX(90deg) translateZ(${half}px)` },
    { transform: `rotateX(-90deg) translateZ(${half}px)` },
  ];

  return (
    <div
      className="cube-scene mx-auto"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <div className="cube" style={{ width: size, height: size }}>
        {faces.map((f, i) => (
          <div key={i} className="cube__face" style={{ transform: f.transform }} />
        ))}
      </div>
    </div>
  );
}
