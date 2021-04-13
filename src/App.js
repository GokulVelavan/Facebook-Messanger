
import './App.css';
import{FormControl,Input,IconButton} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import { useEffect, useState } from 'react';
import {db,timestamp} from "./Firebase"
import Message from "./Message"
import FlipMove from "react-flip-move"

function App() {
  const[input,setInput]=useState("");

  const[username,setUsername]=useState("");

  const[message,setMessage]=useState([]);

  useEffect(() => {
    db.collection("messages").orderBy("timestamp","desc").onSnapshot((snapshot)=>
    {setMessage(snapshot.docs.map((doc)=>({id:doc.id,message:doc.data()})))})
  }, [])

  useEffect(() => {
   setUsername(prompt("Please Enter Your Name!"));
  }, [])
 
  const sendmessage=(event)=>{
    event.preventDefault();
  db.collection("messages").add({username:username,message:input,timestamp:timestamp}).then(()=>{setInput("")});
  }

  return (
    <div className="app">
     <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=399&h=399" 
     alt="messanger logo"/>
     
     <h1>Messanger Clone</h1>
     <p>The <strong>Gokul Velavan</strong> productions</p>
      <h3>Welcome {username}</h3>
      <form className="app-form">
        <FormControl className="app-fromcontrol">
          <Input value={input} placeholder="Type the Teaxt" className="app-input" onChange={(event)=>{setInput(event.target.value)}}/>
            <IconButton onClick={sendmessage} variant="conatined" color="primary" type="submit" className="app-iconbutton" disabled={!input}> 
              <SendIcon /> 
            </IconButton>
        </FormControl>
      </form>
      <FlipMove>
      {message.map(({message,id})=>{return<Message key={id} message={message} username={username}/>})}
      </FlipMove>
    </div>
  );
}

export default App;
