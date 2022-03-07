import { useState,React} from "react"; 
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Header";
import Tasks from "./Tasks.js";

const AddForm = ( {onAdd,showAdd,onToggle} ) => {
  const[text,setTaskName]= useState("")
  const[day,setDay]= useState("")
  const[reminder,setReminder]= useState(false)


  const handleSubmit = (events) =>{
      events.preventDefault();
      if (text== "" || day== ""){
          alert('Insert TaskName or Day')
      }
      alert(`TaskName: ${text}`)
      // newVals represent data from form
      const newVals= {text,day,reminder}
      // call Add Task Function from Task.js 
      // newVals is an argument of onAddd function.
       onAdd({text,day,reminder})
       // Set Form Fields blank
      setTaskName("")
      setDay("")
      setReminder("")

  }

  return (
    
    <div>
        
        <div className='formParent' onSubmit={handleSubmit}>
            <form className='form'>
                <label className='Label' > Task</label>
                
                <input className='Input' type='text' value={text} placeholder="Enter Task Name"
                onChange={ (e) => setTaskName(e.target.value)}>  
                </input>

                <label className='Label' > Day</label>
                <input className='Input' type='text' placeholder="Enter Date" value={day}
                onChange={ (e) => setDay(e.target.value)}>
                    
                </input>
                <label className='Label' > Set Reminder</label>
                <input className='CheckBox' type='checkbox' placeholder="Enter Task Name"
                value= {reminder} checked={reminder}  onChange={ (e) => setReminder(console.log(e.currentTarget.checked))} >
                    
                </input>
                <input className="inputButton" type="submit" value="Submit"></input>


            </form>
        </div>
        
    </div>
  )};

export default AddForm;
