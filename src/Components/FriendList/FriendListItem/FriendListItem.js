import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li className={styles.item} key={id}>
    <span className={isOnline ? styles.online : styles.offline}></span>
    <img className={styles.avatar} src={avatar} alt={name} />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.defaultProps = {};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.string,
}.isRequired;

export default FriendListItem;
