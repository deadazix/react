import styles from "./App.module.css";
import Form from "./components/Form";
function App() {
  const onSaveDataHandler = newData=>{
    console.log('in app')
    console.log(newData)
  }
  return (
    <div className={styles.App}>
      <h1>lets see how this works</h1>
      <Form onSaveData={onSaveDataHandler}></Form>

    </div>
  );
}

export default App;
