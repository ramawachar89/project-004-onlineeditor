import React,{useState} from "react"
import {v4 as uuidV4} from 'uuid'
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";

export default function Share(){
    const[roomId,setRoomId]=useState("");
    const[username,setUsername]=useState("")
    const navigate=useNavigate();

   const createNewRoom= (event)=>{
          event.preventDefault()     //page refresh nahi hoga
          const id=uuidV4()
          setRoomId(id)
          console.log(id)
          toast.success("Created a new room")
    }
    function joinRoom(){
        // if(!roomId || username){    //(rooomId || username == "")
        //     toast.error("Room ID & Username is required")
        //     return;    //iske aage nahi jana
        // }
      
        navigate("/editor",{    //dynamic room id
            state:{
                username,
            }
        })
    }
    function Enterdirect(e){   //event recieve ho jayegi (e)
        console.log('event',e.code)
        if(e.code === 'Enter'){
            joinRoom()
        }
    }
    return(
        <div className="homepagewrapper">
           <div className="formwrapper">
            <h4>paste Invitation Id</h4>
            <div className="inputGroup">
                <input value={roomId} type="text" placeholder="Room Id"
                  onChange={(e)=>setRoomId(e.target.value)}   //onChange manually koi id dale to set honi chaiye
                onKeyUp={Enterdirect}
                />
                <input value={username} type="text" placeholder="username"  onChange={(e)=>setUsername(e.target.value)}   onKeyUp={Enterdirect}/>
                <button onClick={joinRoom}>Join</button>
                <span>
                    if you dont have an invite then create &nbse
                    <a onClick={createNewRoom}href="">new Room</a>
                </span>
            </div>
           </div>
        </div>
    )
}