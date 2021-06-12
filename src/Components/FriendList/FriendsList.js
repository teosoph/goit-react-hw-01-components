// import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem/FriendListItem";

import styles from "./FriendsList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles["friend-list"]}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
  );
};
export default FriendList;
