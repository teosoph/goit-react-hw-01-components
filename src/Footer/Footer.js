import styles from "./Footer.modul.scss";

const Footer = ({
  first,
  second,
  message,
  user: { name, state, questions },
  children,
  color,
  border,
}) => {
  return (
    <footer className={styles.Footer}>
      <h2 className={styles.Footer__Title}>lorem ipsum</h2>
      <p>
        If I add {first} to {second} I should get number
        <span> - </span>
        {first + second} 🍄
      </p>
      <p>
        if First number ({first}) is less than 10 that is
        {first < 10 ? " correct" : " a lie"}
      </p>
      <h1>{message}</h1>
      <p>my name is {name}</p>
      <p>my state is {state}</p>
      questions quantity: {questions}
      {children}
    </footer>
  );
};

Footer.defaultProps = {
  first: 10,
};
export default Footer;
