import React,{useState} from 'react';

const Input = (props) => {
  const [state, setState] = useState({
    text:'',
  })

  const onChangeHandle = (e) => {
    setState({...state,
      [e.target.name]: e.target.value
    })
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    props.onCreate(state.text)
    setState({
      text: '',
    })
  }
  
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='userContent'>내용</label>
      <input id='userContent' name='text' type='text' value={state.text} 
      onChange={onChangeHandle}/>
      <br />
      <button>입력</button>
    </form>
  )
}

export default Input