import React,{useState} from "react";
import styles from "./App.module.css";
import Form from "./components/Form";
import PeopleOutputContainer from "./components/PeopleOutput/PeopleOutputContainer";
function App() {
  const BaseData =[
    {username:'jay',age:'25'},
    {username:'jacob',age:'12'}

  ]
  const [data,setData] = useState(BaseData)
  const onSaveDataHandler = newData=>{
    console.log('in app')
    console.log(newData)
    setData(function(prw){
      return [newData,...prw]
    })
  }
  return (
    <div className={styles.App}>
   
      <Form onSaveData={onSaveDataHandler}></Form>
      <PeopleOutputContainer data={data}></PeopleOutputContainer>

    </div>
  );
}

export default App;
