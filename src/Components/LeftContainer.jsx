import styles from "./leftcontainer.module.css";
export default function LeftContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
