import {Link} from 'react-router-dom';

const style = {
  body : {
    width : '100%',
    height : '50px',
    backgroundColor : '#555',
    display : 'flex',
  },
  img : {
    flex : 1,
    backgroundColor : 'blue',
  },
  container : {
    flex : 4,
    alignSelf : 'center',
  },
  igo : {
    flex : 1,
    backgroundColor : 'blue',
  },

  list : {
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

const Logo = (props) => {
  return (
    <div className="Logo_Body" style={style.body}>
      <div className="Logo_img" style={style.img}>
      </div>
      <div className="Logo_Container" style={style.container}>
        <div className="Logo_list" style={style.list}>
        <span style={style.span}> <Link to='/' style={style.link}> Home </Link> </span>
          <span style={style.span}> <Link to='/information' style={style.link}> information </Link> </span>
          <span style={style.span}> <Link to='/board' style={style.link}> board </Link> </span>
        </div>
      </div>
      <div className="Logo_igo" style={style.igo}>
      </div>
    </div>
  )
}

export default Logo;
