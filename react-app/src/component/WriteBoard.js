import {useEffect, useState, useRef} from 'react';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const style= {
  body : {
    width : "90%",
    height : "500px",
    margin : "0 auto",
    border : '1px solid #ddd',
    overflow : 'scroll'
  },
  input : {
    width : "50%",
    margin : '0 auto'
  },
  content : {
    width : "100%",
    height : "500px",
    border : '1px solid black'
  }
}

const WriteBoard = (props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [editorText, setEditorText] = useState("");
  const onEditorStateChange = (e) => {
    setEditorState(e)
  }

  useEffect(()=>{
    console.log(editorState);
    setEditorText(document.getElementsByClassName('editorClassName')[0].outerHTML)
  }, [editorState])

  return (
    <>
      <div className="Write_Body" style={style.body}>
        <input type="button" className="Write_title" style={style.input}/> <br/><br/>
        <div>
          <div>
            <div style={{ border: "1px solid black", padding: '2px', minHeight: '400px' }}>
              <Editor
               editorState={editorState}
               onEditorStateChange={onEditorStateChange}
               toolbarClassName="toolbarClassName"
               wrapperClassName="wrapperClassName"
               editorClassName="editorClassName"
               placeholder="내용을 입력해 주세요."
               toolbar={{
                  // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
                  list: { inDropdown: true },
                  textAlign: { inDropdown: true },
                  link: { inDropdown: true },
                  history: { inDropdown: false },
                }}
               />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WriteBoard;
