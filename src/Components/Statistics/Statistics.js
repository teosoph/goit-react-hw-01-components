import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">{title.docx}</span>
          <span class="percentage">{stats}4%</span>
        </li>
        <li class="item">
          <span class="label">.mp3</span>
          <span class="percentage">14%</span>
        </li>
        <li class="item">
          <span class="label">.pdf</span>
          <span class="percentage">41%</span>
        </li>
        <li class="item">
          <span class="label">.mp4</span>
          <span class="percentage">12%</span>
        </li>
      </ul>
    </section>
  );
};

// Statistics.defaultProps = {
//   avatar:
//     "https://u7.uidownload.com/vector/370/347/vector-pianobrad-avatar-svg.jpg",
//   tag: "empty",
//   location: "empty",
//   stats: {
//     followers: 0,
//     views: 0,
//     likes: 0,
//   },
// };

// Statistics.propTypes = {
//   avatar: PropTypes.string,
//   alt: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   stats: PropTypes.shape({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default Statistics;
