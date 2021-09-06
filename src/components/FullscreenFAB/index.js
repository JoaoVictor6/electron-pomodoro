import { useState } from 'react'
import './style.scss'
import { 
  AiOutlineFullscreenExit as Minimize,
  AiOutlineFullscreen as Maximize
} from 'react-icons/ai'

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