import React from 'react'
import {UnControlled as CodeMirror} from 'react-codemirror2'


export default class InputArea extends React.Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div style={{backgroundColor:'lightBlue', width:'60%'}}>
        <CodeMirror value ='Input Text Here'
        options={{lineSperator:'null', showCursorWhenSelecting:true, cursorBlinkRate:1000}}
        onChange={(obj) => console.log(obj.getValue())}
        />
      </div>
    )
  }
}
