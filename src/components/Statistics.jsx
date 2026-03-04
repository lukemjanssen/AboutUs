import './Statistics.css';
import statisticsImage from '../assets/statistics-image.png';

const STATS = [
  { value: '25,664,890', label: 'Downloads' },
  { value: '17,219',     label: 'Paid users' },
  { value: '190,654,321', label: 'Images in library' },
];

const Statistics = () => {
  return (
    <section className="statistics">

      {/* ── Top text block ─────────────────────────────────── */}
      <div className="statistics__header">
        <p className="statistics__eyebrow">Statistics</p>
        <h2 className="statistics__heading">More than premium abstract imagery</h2>
        <p className="statistics__subtitle">
          Our platform is more than just as a service to us – it is a catalyst
          for enriching lives through premium abstract imagery.
        </p>
      </div>

      {/* ── Image + metrics row ────────────────────────────── */}
      <div className="statistics__body">
        <div className="statistics__image">
          <img src={statisticsImage} alt="Abstract architectural shapes in white and blue" />
        </div>

        <div className="statistics__metrics">
          <p className="statistics__mission">Our mission, in numbers</p>

          <ul className="statistics__stat-list">
            {STATS.map(({ value, label }) => (
              <li key={label} className="statistics__stat-card">
                <span className="statistics__stat-value">{value}</span>
                <span className="statistics__stat-label">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  );
};

export default Statistics;
