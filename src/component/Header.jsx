import { FaPager } from 'react-icons/fa';
import mySvg from '../assets/svg.svg'
function Header() {
  return (
    <div className="header">
      <img src="{mySvg}" alt="" />
      <h1 className='todo'>ToDO
        {/* <mySvg style={{"fontSize":"2rem"}}/> */}
        <FaPager style={{"marginLeft":"30px"}}/>
      </h1>
    </div>
  )
}

export default Header
