import React from 'react'

const Pagination = ({
    pagePerCount, currentPage, setCurrentPage, length
}) => {

  // 총 length로 몇개의 pagination을 만들 것인가. 17개면[1,2,3,4] / 12개면 [1,2,3]
  const pagerNumber = []; 
               // 한 화면에 몇pages씩 보여줄 것인가=>총 21개 라면 마지막 1page추가 해서 나타내라
  for( let a=1; a <= Math.ceil(length/pagePerCount); a++ ){
       pagerNumber.push( a )
  }   // page의 총 갯수 구하는 공식

  return (
    <div className='flex gap-3 justify-center'>
    
      <button style={{
        display : currentPage === pagerNumber[0] ? 'none' : 'block'
      }}
              className='border-solid border-[1px] rounded-md w-[30px] h-[30px]'
              onClick={()=>setCurrentPage( currentPage - 1)} 
      > &lt; </button>
      <ul className='flex gap-[3px] justify-center'>
        {
            pagerNumber.map( item=><li key={ item }           // rounded-sm rounded-full |  click = active
                className='w-[30px] h-[30px] text-center bg-green-600 rounded-md cursor-pointer 
                  text-2xl hover:bg-yellow-300 hover:text-black  active:bg-blue-700 '  

                onClick={()=>setCurrentPage( item )}

            >{ item }</li>)
        }
      </ul>
      <button style={{
        display : currentPage === pagerNumber[pagerNumber.length - 1] ? 'none' : 'block'
      }} 
              className='border-solid border-[1px] rounded-md w-[30px] h-[30px]'
              onClick={()=>setCurrentPage( currentPage + 1)} 
      >&gt;</button>
    </div>
  )
}

export default Pagination
