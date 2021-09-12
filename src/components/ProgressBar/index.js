import useTimer from '../../context/timerContext'
import './style.scss'

function ProgressBar({ percentValue }){
  const {
    isBreakTime
  } = useTimer()
  return(
    <div 
      className={`progress-bar ${isBreakTime ? 'break-time' : false}`} 
      style={{
        width: `${percentValue}%`
      }}
    >
    </div>
  )
}

export default ProgressBar
