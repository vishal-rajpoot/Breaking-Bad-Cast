import React, { useEffect, useState } from 'react'
// import ReactPaginate from 'react-paginate'

const Pagination = ({ onChangehandler, showPerPage, total}) => {

  const [counter, setCounter] = useState(1); // this counter is declared to increase or decrease the page

  useEffect(() => {
    const value = showPerPage * counter; // here showperpage =8 , counter=1 which is "8", it will increase by 8 when counter hits.

    // console.log('start value', value-showPerPage);
    // console.log('end value', value);

    onChangehandler(value - showPerPage, value);  //  if value=8, showperpage=8, then first parameter will be "0" here , and second parameter is "8". when buttons will be clicked by someone, page values will be effected by "8".

  },[counter]) // here "useEffect hook" is dependent on counter value, this hook will call everytime when counter changes.

  const onButtonClick = (type) =>{
    if(type === 'prev'){
      if(counter === 1){
        setCounter(1);
      } else {
        setCounter(counter-1);
      }
    } else if(type === 'next'){
      if(Math.ceil(total/showPerPage) === counter){
        setCounter(counter);
      } else {
        setCounter(counter+1);
      }
    }
  }

 
  return (
      <div className='pagination'>
        < button className='page-item' onClick={() => onButtonClick('prev')}>Previous</button>
        < button className='page-item' onClick={() => onButtonClick('next')}>Next</button>

        {/* <ReactPaginate previousLabel={'Previous'} nextLabel={'Next'} breakLabel={'...'} pageCount={5} marginPagesDisplayed={2} pageRangeDisplayed={3} onPageChange={onChangehandler} containerClassName={'pagination'} pageClassName={'page-item'} pageLinkClassName={'page-link'} previousClassName={'page-item'} previousLinkClassName={'page-link'} nextClassName={'page-item'} nextLinkClassName={'page-link'} breakClassName={'page-item'} breakLinkClassName={'page-link'}
        activeClassName={'active'} /> */}
      </ div >
    
  )
}

export default Pagination