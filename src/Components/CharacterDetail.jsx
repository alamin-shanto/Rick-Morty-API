import { useEffect, useState } from "react";
import styles from "./characterDetail.module.css";

export default function CharacterDetail() {
  const [getCharacter, setGetCharacter] = useState();
  const URL = `https://rickandmortyapi.com/api/character`;
  useEffect(() => {
    async function CallCharacter() {
      const res = await fetch(`${URL}`);
      const data = await res.json();
      setGetCharacter(data);
    }

    CallCharacter();
    console.log(getCharacter);
  }, []);

  return (
    <div>
      {getCharacter &&
        getCharacter.results &&
        getCharacter.results.map((eachCharacter) => {
          return (
            <div key={eachCharacter.id} className={styles.characterDetail}>
              <img src={eachCharacter.image} alt={eachCharacter.name} />
              <h2>{eachCharacter.name}</h2>
              <p>
                <b>Status:</b>
                {eachCharacter.status}
              </p>
              <p>
                <b>Species:</b>
                {eachCharacter.species}
              </p>
              <p>
                <b>Gender:</b>
                {eachCharacter.gender}
              </p>
              <p>
                <b>Location:</b>
                {eachCharacter.location.name}
              </p>
            </div>
          );
        })}
    </div>
  );
}
