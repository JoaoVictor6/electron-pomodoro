import { createContext, useContext, useState } from "react"

const Context = createContext()

export function TimerProvider({children}){
  const [ minute, setMinute ] = useState(1)
  const [ seconds, setSeconds ] = useState(0)
  const [ breakTime, setBreakTime ] = useState(2)
  const [ isBreakTime, setIsBreakTime ] = useState(false)
  const [ currentMinute, setCurrentMinute ] = useState(minute)
  const [isPaused, setIsPaused] = useState(false)
  const [percentTimer, setPercent ] = useState(100)
  
  return(
    <Context.Provider value={{
      minute, 
      setMinute,
      seconds, 
      setSeconds,
      isPaused, 
      setIsPaused,
      currentMinute, 
      setCurrentMinute,
      percentTimer, 
      setPercent,
      breakTime, 
      setBreakTime,
      isBreakTime, 
      setIsBreakTime
    }}>
      {children}
    </Context.Provider>
  )
}

export default function useTimer(){
  const timer = useContext(Context)

  return {...timer}
}
