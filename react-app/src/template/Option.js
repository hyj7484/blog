import {Link} from 'react-router-dom';

const Option = (props) => {
  return (
    <>
    <div className="Option">
      <ul>
        <li> <Link to='/'> Home </Link> </li>
        <li> <Link to='information'> Information </Link> </li>
        <li> <Link to='content'> Content </Link> </li>
        <li> <Link to='project'> Project </Link> </li>
      </ul>
    </div>
    </>
  )
}


export default Option;
