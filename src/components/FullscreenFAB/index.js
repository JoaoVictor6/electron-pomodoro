import { useState } from 'react'
import './style.scss'
import Minimize from './minimize'
import Maximize from './maximize'

export default function FullscreenFAB(){
  const [isFullscreen, setIsFullscreen] = useState(false)
  const handleClick = () => {
    if(!isFullscreen){
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
        setIsFullscreen(!isFullscreen)
      }
    } else {
      document.exitFullscreen()
      setIsFullscreen(!isFullscreen)
    }
  }

  return(
    <button className="fullscreen__fab" onClick={handleClick}>
      {isFullscreen ? (
        <Minimize />
      ) : (
        <Maximize />
      )}

    </button>
  )
}