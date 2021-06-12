import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

function colorGen() {
  const [r, g, b] = [1, 1, 1].map(() => {
    return Math.floor(Math.random() * 256);
  });
  return `rgb(${r},${g},${b})`;
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.list}>
        {stats.map((item) => {
          return (
            <li
              className={styles.item}
              key={item.id}
              style={{ backgroundColor: colorGen() }}
            >
              <span className={styles.label}>{item.label}</span>

              <span className={styles.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
