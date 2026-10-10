function TickSet() {
  return (
    <div className="tick-set serif">
      <span>Parenting coach</span>
      <svg viewBox="0 0 24 24">
        <path d="M12 1 C13 8 16 11 23 12 C16 13 13 16 12 23 C11 16 8 13 1 12 C8 11 11 8 12 1 Z" />
      </svg>
      <span>Work-life balance coach</span>
      <svg viewBox="0 0 24 24">
        <path d="M12 1 C13 8 16 11 23 12 C16 13 13 16 12 23 C11 16 8 13 1 12 C8 11 11 8 12 1 Z" />
      </svg>
      <span>Business coach</span>
      <svg viewBox="0 0 24 24">
        <path d="M12 1 C13 8 16 11 23 12 C16 13 13 16 12 23 C11 16 8 13 1 12 C8 11 11 8 12 1 Z" />
      </svg>
      <span>Parenting coach</span>
      <svg viewBox="0 0 24 24">
        <path d="M12 1 C13 8 16 11 23 12 C16 13 13 16 12 23 C11 16 8 13 1 12 C8 11 11 8 12 1 Z" />
      </svg>
      <span>Work-life balance coach</span>
      <svg viewBox="0 0 24 24">
        <path d="M12 1 C13 8 16 11 23 12 C16 13 13 16 12 23 C11 16 8 13 1 12 C8 11 11 8 12 1 Z" />
      </svg>
      <span>Business coach</span>
      <svg viewBox="0 0 24 24">
        <path d="M12 1 C13 8 16 11 23 12 C16 13 13 16 12 23 C11 16 8 13 1 12 C8 11 11 8 12 1 Z" />
      </svg>
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="tick" aria-hidden="true">
      <div className="tick-track">
        <TickSet />
        <TickSet />
      </div>
    </div>
  );
}
