import React from 'react'
import './person.css';
function Person(props) {
    


  return (
    <div>
        <h1 className='h1style' data-testid="name">{props.name}</h1>
        <h2 className='h2style' data-testid="age">{props.age}</h2>
        <h4 className='h4style'>{props.gender}</h4>

        <form className='formstyle' onSubmit={props.func}>
            <input type='text' placeHolder='edit name' name='n'/>
            <br></br>
            <input type='text' placeHolder='edit age' name='a'/>
            <br></br>
            <input type='text' placeHolder='edit gender' name='g'/>
            <br></br>
            <input className='submitstyle' type='submit' value='Press to edit'></input>
            
        </form>
    </div>
  )
}

export default Person
