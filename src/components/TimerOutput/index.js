import { useEffect,useState } from 'react'
import useTimer from "../../context/timerContext"
import notify from '../../utils/notify'
import "./style.scss"

export default function TimerOutput(){
  const {
    seconds, 
    setSeconds,
    isPaused,
    setCurrentMinute,
    currentMinute,
    minute,
    setPercent,
    breakTime,
    isBreakTime, 
    setIsBreakTime
  } = useTimer()
  const [ currentBreakTime, setCurrentBreakTime ] = useState(breakTime)

  const resetCurrentBreakTime = () => {
    setCurrentBreakTime(breakTime)
  }
  
  const resetCurrentMinute = () => {
    setCurrentMinute(minute)
  }
  useEffect(() => {
    function timer(){
      if(isBreakTime){
        if(isPaused) return
        if(currentBreakTime === 0 && seconds === 0){
          setIsBreakTime(false)
          setPercent(100)
          resetCurrentBreakTime()
          return
        }
        if(seconds === 0){
          setSeconds(59)
          setCurrentBreakTime(currentBreakTime-1)
          return
        } 
        setSeconds(seconds - 1)

      }else{
        if(isPaused) return
        if(currentMinute === 0 && seconds === 0){
          setIsBreakTime(true)
          setPercent(100)
          resetCurrentMinute()
          return
        }
        if(seconds === 0){
          setSeconds(59)
          setCurrentMinute(currentMinute-1)
          return
        } 
        setSeconds(seconds - 1)
      }
    }

    if(isBreakTime){
      const totalInSeconds = seconds + (currentBreakTime*60)
      setPercent(((totalInSeconds * 100) / (breakTime*60)))
    }else {
      const totalInSeconds = seconds + (currentMinute*60)
      setPercent(((totalInSeconds * 100) / (minute*60)))
    }

    const interval = setInterval(timer, 1000)
    return () => clearInterval(interval)
  })

  useEffect(() => {
    if(seconds === 0 & currentMinute === 0){
      notify('Tempo acabou', 'Hora do descando!')
    }
  }, [seconds, currentMinute])
  return (
    <>
    {
      isBreakTime ? (
        <div className="timer-output">
          {currentBreakTime.toString().length < 2 ? `0${currentBreakTime}` : currentBreakTime}
          :
          {seconds.toString().length < 2 ? `0${seconds}` : seconds}
        </div>
      ): (
        <div className="timer-output">
          {currentMinute.toString().length < 2 ? `0${currentMinute}` : currentMinute}
          :
          {seconds.toString().length < 2 ? `0${seconds}` : seconds}
        </div>
      )
    }
    </>
  )
}