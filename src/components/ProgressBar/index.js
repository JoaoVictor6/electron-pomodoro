import propTypes from 'prop-types'
import './style.scss'

function ProgressBar({ percentValue }){
  return(
    <div className="progress-bar" style={{
      width: `${percentValue}%`
    }}></div>
  )
}

ProgressBar.propTypes = {
  percentValue: propTypes.number.isRequired
}

export default ProgressBar
