import React, { useState } from 'react'

const Search = ({getQuery}) => {

    const [text, setText] = useState('');

    const onchange = (q) => {
        setText(q)
        getQuery(q)
    }
  return (
    <section className='search'>
        <form>
            <input type= 'text'
             className='form-control' 
             placeholder='Search Characters'
             value={text}
             onChange = {(event) => { // here onChange is an attribute of input bar
                 onchange(event.target.value)}} // value will get from user when someone type in search bar will pass to that argument above where "onchange" function is defined.
             autoFocus>
             </input>
        </form>

    </section>
  )
}
export default Search