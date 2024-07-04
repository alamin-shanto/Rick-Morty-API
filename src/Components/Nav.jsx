import styles from "./nav.module.css";
export default function Nav() {
  return (
    <div className={styles.navName}>
      <span>
        👯 <b>Rick & Morty</b>
      </span>
    </div>
  );
}
