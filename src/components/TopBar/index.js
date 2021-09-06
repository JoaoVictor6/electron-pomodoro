import FullscreenFAB from "../FullscreenFAB";
import MenuFAB from "../MenuFAB";
import './style.scss'
export default function TopBar(){
  return (
    <div className="top-bar">
      <FullscreenFAB />
      <MenuFAB />
    </div>
  );
}