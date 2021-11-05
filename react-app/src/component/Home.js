import {Logo, Container} from '../template/index';

const style = {
}

const Home = (props) => {
  return (
    <div className="Home_Body">
      <div className="Home_Header"> <Logo /> </div>
      <div className="Home_Content">
        <input style={{width:"50%", height:"50px", margin : '0 auto'}}/>
      </div>
    </div>
  )
}

export default Home;
