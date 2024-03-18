import { useState } from "react";
import styles from './form.module.css';


export default function Form({todos, setTodos}) {

  //  const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({name: "", done: false});
   


    function handleSubmit(e)
    {
        e.preventDefault();

        setTodos([...todos, todo]);

       // setTodo("");
       setTodo({name: "", done: false});

      //  console.log("todo: " + todo);

      //  console.log("todos: " + todos);
    }

    return (<form className={styles.todoform} onSubmit={handleSubmit} > 
       
       <div className={styles.inputContainer}>
       <input 
        placeholder="Enter todo item"
        className={styles.modernInput}
         onChange={(e) => {
            setTodo({name: e.target.value, done: false});
          }
        }
         value={todo.name} type="text">                
         </input>
        <button className={styles.modernButton}
         type="submit">Add</button>
       </div>
       
    </form>);
}