import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { fontAwesome } from "fontawesome";
import AddForm from "./AddForm.js";
import Header from "./Header.js";
import Button from "./Button.js";
//import TaskActions from "./TaskActions.js";
const data= [
    {
        id:1, 
        text: "Reading",
        day: "Feb 6th at 4:30pm",
        reminder: true
    },

    {
        id:2, 
        text: "Market",
        day: "Feb 17th at 1:30pm",
        reminder: false
    },

    {
        id:3, 
        text: "Library",
        day: "Nov 12th at 10:00 am",
        reminder: true
    }
]


// Function Component Tasks
const Tasks = ({onAdd,show,colour,double}) => {
    const [task,setTask] = useState(data)
    const [formButton, setFormButton] = useState(false)
    const [mainColor, setColor]= useState("true")

    // DeleteTask is a function
    // remove current task based on id.
    const deleteTask = (id) => {
 /* Normally when close icon is clicked, we get id of element clicked which means f.id===id but we need the opposite  */
        setTask(task.filter((f) => {
            if(f.id !==id){ 
                return f.text}
        }))
        
    }

    /* To change the inner/ original value of reminder use spread operator to copy the array b4 making the changes
    else the value of reminder will change once */
    const toggleTask= (id) => {
        setTask(task.map((toggler) => 
            toggler.id===id ? { ...toggler, reminder: !toggler.reminder} : toggler
        ))
        }
    
    const AddTask = (add) =>{
        const id= Math.floor(Math.random() * 100 )
        const newTask= {id,...add}
        console.log(add)
        const finalVal=setTask([...task, newTask])
        

    }

    const showAddButton= () =>{
        // Hide Form if formButton variable is false otherwise show it if its True
        //console.log("Show")
        setFormButton(!formButton)
        
        console.log (formButton)
        return formButton
        
       
        
    }

  return (
  <div > 
      <div className="flexContainer" >
            <div className='span'>
        
                < Header  />
                < Button show={showAddButton}  double= {formButton} />
            </div>
      </div>

     
      {formButton !== true && <AddForm onAdd={AddTask} onToggle={toggleTask}/> }
      
 
      
      
     {
         
     task.map((e) =>{
         
         return (
        <div >
            <div className= {`tasklist ${e.reminder ? 'reminder' : 'redReminder'}`} 
            onDoubleClick={ () => {toggleTask(e.id)}}>

            <p >
            {  e.text } 
            <FontAwesomeIcon icon={faTrash}  
            onClick={ ()=> deleteTask(e.id) }
            style={{color:"red", float:"right"}} /> 
            </p>
            <p> {e.day} </p>
            
            </div>
        </div>)
         
     } ) }
      
  </div>);
};

export default Tasks;

