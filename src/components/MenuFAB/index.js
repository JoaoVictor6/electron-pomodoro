import { useState } from "react"
import "./style.scss"
import { AiOutlineMenu as MenuIcon } from 'react-icons/ai'

export default function MenuFAB(){
  const [focus, setFocus] = useState(false)
  return(
    <button onClick={() => setFocus(!focus)} className="menu-fab">
      <MenuIcon />
      <div
        style={{
          display: focus ? "block" : "none"
        }}
      >
        <button>teste</button>
      </div>
    </button>
  )
}