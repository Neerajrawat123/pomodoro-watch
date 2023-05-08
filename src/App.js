import React,{useState,useEffect} from "react";
import "./App.css"

function App(params) {
  const [count, setcount] = useState(1500)
  const [isCountdown, setisCountdown] = useState(false)
  // const [break, setbreak] = useState(0)
  useEffect(() => {
    let interval
    if (count && isCountdown>0) {
       interval = setInterval(() => {
        setcount((prevcount)=>prevcount-1)
        
      }, 1000);
      
    }else if(count===0){
      clearInterval(interval)
      setisCountdown(false)
      alert("time is over")

    }
    
  
    return () => {clearInterval(interval)
      
    }
  }, [count,isCountdown])
  const handleStart=()=>{
    setisCountdown(true)
    

  }
  const handlePomodoro = ()=>{
    setisCountdown(false)
    setcount(1500)

  }
  const handleLong = () =>{
    setisCountdown(false)

    setcount(900)

  }
  const handleShort = ()=>{
    setisCountdown(false)

    setcount(300)

  }

  const handlePause = ()=>{
    setisCountdown(false)
  }
  const formatCountdownTime = new Date(count * 1000).toISOString().substr(11, 8);

  
  
  return(
    <div className="app">
      <div className="container">
        <div className="btn-container">

        <button onClick={handlePomodoro}>Pomodoro</button>
        <button onClick={handleShort}>short break</button>
        <button onClick={handleLong}>long break</button>
        </div>

        <div className="timer">{formatCountdownTime}</div>
        {isCountdown?
        (<button className="pause main" onClick={handlePause}>pause </button>):
        ( <button className="start main" onClick={handleStart}>start</button>)
        

        }

      </div>
    </div>

  )
  
}
export default App;

