export default function ProjectMockup({ accent = "blue", variant = 1 }) {
  return (
    <div className={`mockup mockup--${accent}`}>
      <div className="mockup-bar">
        <span />
        <span />
        <span />
      </div>

      {variant === 1 && (
        <div className="mockup-body">
          <div className="mockup-header" />
          <div className="mockup-line w1" />
          <div className="mockup-line w2" />
          <div className="mockup-line w3" />
          <div className="mockup-cards">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      )}

      {variant === 2 && (
        <div className="mockup-body">
          <div className="mockup-header" />
          <div className="mockup-list">
            <div className="mockup-list-row" />
            <div className="mockup-list-row" />
            <div className="mockup-list-row" />
            <div className="mockup-list-row" />
          </div>
        </div>
      )}

      {variant === 3 && (
        <div className="mockup-body">
          <div className="mockup-header" />
          <div className="mockup-detail-hero" />
          <div className="mockup-cards mockup-cards--wide">
            <div />
            <div />
          </div>
        </div>
      )}
    </div>
  );
}