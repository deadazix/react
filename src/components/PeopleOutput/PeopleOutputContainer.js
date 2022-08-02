import People from "./People";
import styles from './PeopleOutputContainer.module.css'
const PeopleOutputContainer = (probs) => {
  
  return (
    <div className={styles.container}>
      {probs.data.map((data, i) => {
        return (
          <People username={data.username} age={data.age} key={i}></People>
        );
      })}
    </div>
  );
};
export default PeopleOutputContainer;
