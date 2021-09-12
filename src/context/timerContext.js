import { createContext, useContext, useState } from "react"

const Context = createContext()

export function TimerProvider({children}){
  const [ minute, setMinute ] = useState(1)
  const [ currentMinute, setCurrentMinute ] = useState(minute)
  const [ seconds, setSeconds ] = useState(0)
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
      setPercent
    }}>
      {children}
    </Context.Provider>
  )
}

export default function useTimer(){
  const timer = useContext(Context)

  return {...timer}
}
