import './App.css';
import { useState, useEffect } from 'react';
import ToDoList from './ToDoList';
import ListItem from './ListItem';
import Completed from './Completed';
import CompletedDiv from './CompletedDiv';

function App() {
  const [start, setStart] = useState(1);  
  const [list, setList] = useState([]); //main todo array.
  const [count, setCount] = useState(0); //used for indexing and choosing proper item. 
  const [listDetails, setDetails] = useState([]); //name and id details for each list item. 
  const [completed, setComplete] = useState([]); //completed item array. 
  const [header, setHeader] = useState(''); //used to toggle main header display.   
  const [fill, setFill] = useState(false); //used to toggle clear complete button display. 
  const [column, setColumn] = useState(false); //used to toggle column names display. 
  let elements = list.map((item, index)=>{ //reMaps list array every re render. 
    return <ListItem key={item} name={item} list={value => deleteToDo(value, index)} complete={value => completeMe(value, index, listDetails[index].id)} />
  });

  const deleteToDo = (value, num) => { //delete specific list item.
    const filterToDo = list.filter((item, index)=>{
      return index !== num; 
    }); 
    const filterDetails = listDetails.filter((item, index)=>{
      return index !== num; 
    });
    if(filterToDo.length <= 0){ //toggles list column names display.
      setColumn(false); 
    };
    setList(filterToDo);
    setDetails(filterDetails); 
  }; 

  const clearArray = () => { //clears completed list.                        
    const clear = completed.map((item, index)=>{
      return index < 0; 
    }); 
    setComplete(clear);
    setHeader('');
    setFill(false); 
    setDetails([]);  
  };  

  const completeMe = (value, num, id) => { //removes item from list and adds to complete list. 
    setStart(start + 1);  
    const findToDo = list.filter((item, index)=>{
      return index === num; 
    }); 
    const filterToDo = list.filter((item, index)=>{
      return index !== num; 
    }); 
    const filterDetails = listDetails.filter((item, index)=>{
      return index !== num; 
    }); 
    let completedElements = findToDo.map((item, index)=>{
      return <Completed name={item} number={id + 1} start={start} />
    });
    console.log('start ' + start)
    console.log('id ' + id);
    setList(filterToDo);
    setDetails(filterDetails);
    setComplete(current=>[...current, completedElements]); //push element to end of array. 
    setHeader('Completed');
    setFill(true);  
    console.log('length ' + list.length);
    if(list.length <= 1){ //toggles list column names display.
      setColumn(false); 
      setDetails([]);
    };
  }; 

  const changeArray = (id) => { //adds input value to list. 
    const inputValue = document.querySelector('.inputBox').value;  
    setList(current=>[...current, inputValue]);
    setCount(count + 1);
    const toDo = {
      name: inputValue, 
      id: count, 
    }; 
    setDetails(current=>[...current, toDo]); 
    setColumn(true); 
    const filterToDo = list;
    if(filterToDo.length < 0){ //toggles list column names display.
      setColumn(false); 
    };
  }; 

  useEffect(()=>{ //clears input when adding item to list. 
    let listValue = document.querySelector('.inputBox');  
    listValue.value = '';  
  }, [listDetails, list, start]); 


  return (
    <div className="App">
      <ToDoList fill={fill} elements={elements} changeArray={changeArray} clear={clearArray} column={column} />
      <CompletedDiv name={completed} header={header} id={start}/>
    </div>
  );
}

export default App;
