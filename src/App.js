import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [toDo,settoDo] =useState('')
  const [value,setvalue] =useState([])

  function DeletHandle (id){

    const newitms = value.filter((itm) =>itm.id !== id)
    setvalue(newitms);

    return(
      console.log(id)
    )
  }
  
  return (
    <div className="App">
          <div className='maindiv'>

              <div className='headingtodo'>
                   <h2>To Do</h2>


              </div>

              <div className='inputab'>
                  <input className='todoinput' type='text' value={toDo} 
                  onChange={(e)=>settoDo(e.target.value)} placeholder='What to do..?' />
                
                  <i className='addButton'
                   onClick={()=>setvalue([...value,{id:Date.now() ,text:toDo}])} 
                  class="fa-solid fa-plus" style={{fontSize:"40px",color:"#fcfc03"}}></i>

               </div>

               {value.map((itm)=>{

                return(


                  <div className='todos'>

                    <div  className='todo'>
 
                     <h3>{itm.text}</h3>
                     <div className='todo_icon'>
                     <i onClick={()=>DeletHandle(itm.id)} class="fa-solid fa-trash"></i>
                     
                    </div>
                    </div>
                </div> )

              })
            }
                




          </div>
    </div>
  );
}

export default App;
