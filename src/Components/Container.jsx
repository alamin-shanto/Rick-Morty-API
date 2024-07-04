import CharacterDetail from "./CharacterDetail";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import styles from "./container.module.css";
export default function () {
  return (
    <div className={styles.container}>
      <LeftContainer>
        <CharacterDetail />
      </LeftContainer>
      <RightContainer></RightContainer>
    </div>
  );
}
