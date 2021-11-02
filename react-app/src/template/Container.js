import {Link} from 'react-router-dom';

const style = {
  body : {
    display : 'block',
    textAlign : "center",
  },
  span : {
    alignSelf : 'center',
    padding : "0px 20px",
    borderBottom : "1px solid #ddd",
    margin : "0px 10px",
    fontSize : "19px",
  },
  link : {
    textDecoration : 'none',
    color : 'white',
  }
}

const Container = (props) => {

  return (
    <div className="Container_body" style={style.body}>
      <span style={style.span}> <Link to='/information' style={style.link}> information </Link> </span>
      <span style={style.span}> <Link to='/board' style={style.link}> board </Link> </span>
    </div>
  )
}

export default Container;
