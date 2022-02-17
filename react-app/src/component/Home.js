import {useRef} from 'react';
import {Link} from 'react-router-dom';

import {Option} from '../template/index';

import listImg from '../Image/list.png';


const Home = (props) => {
  const list_element = useRef(null);

  return (
    <>
      <header className="Home_Header">
        <div className="Home_Option">
          <div style={{position:"relative", top:'50%', float:'left', transform:'translate(0%, -50%)'}}>
            가나다라sdafssfas
          </div>
          <Option />
        </div>
      </header>
      <nav className="Home_List" ref={list_element}>
      </nav>
      <div className="Home_Body">
      </div>
    </>
  )
}

export default Home;
