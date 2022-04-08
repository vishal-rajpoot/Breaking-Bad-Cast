import React, { useState } from 'react'
import Spinner from '../UserInterface/Spinner'
import CharacterItem from './CharacterItem'
import Pagination from '../UserInterface/Pagination' 

const CharacterGrid = ({ items, isLoading }) => {

    const [showPerPage, setShowPerPage] = useState(8);

    const [paginate, setPaginate] = useState ({
        start: 0,
        end: showPerPage,
    });

    const onChangehandler = (start , end) =>{    // here this method will take 2 arguments
        setPaginate({start:start, end: end}) // by calling this method, "start value" and "end value" will be change in """Pagination component"""

    }

  return isLoading ? 
  
    <Spinner /> :

    <>
    
        <section className='cards'>
            { items.slice(paginate.start, paginate.end).map( item =>
                <CharacterItem key={item.char_id} item = {item} showPerPage = {showPerPage} />
            )}
        </section>

        <Pagination showPerPage={showPerPage} onChangehandler={onChangehandler} total={items.length}/> {/* // Here "items.length" is a length of a data which is recieved from the server // */}
        
        {/* // also we have passed "onChangehandler" Method as a prop.  */}

    </>
  
}
export default CharacterGrid