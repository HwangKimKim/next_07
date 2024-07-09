// src/app/movies/page.jsx => 영화들을 fetching
// localhost:3000/movies

'use client'

import React, { useState, useEffect } from 'react'
import Pagination from '../components/Pagination';
import Card from '../components/Card';
import Image from 'next/image';

const Movies = () => {

  const [ movies, setMovies ] = useState([ ]);  
  const url = `https://yts.mx/api/v2/list_movies.json`

  // 사용자 성향에 따라 한 화면에 몇개씩 나타내는지가 바뀜
  // let pagePerCount = 5;  
  // 몇번째 page 현재 볼건데. 기본은 첫 페이지
  // let currentPage = 1;
  // let [ currentPage, setCurrentPage ] = useState( 1 );
  // 현재 보여줄 목록의 갯수=>10개? 20개 중 마지막 번호 구하기
  // let lastOfIndex = currentPage * pagePerCount; 
  // 시작 번호 구하기
  // let startOfINDEX = lastOfIndex - pagePerCount; 


  let pagePerCount = 5; 
  let [ currentPage, setCurrentPage ] = useState( 1 );  
  let lastOfIndex = currentPage * pagePerCount; 
  let startOfIndex = lastOfIndex - pagePerCount; 

  // 화면에 표시될 영화 잘라내기
  let pageMovies = movies.slice( startOfIndex, lastOfIndex )

  useEffect(()=> {
   
    fetch( url )
    .then(res=>res.json())
    .then(res=> setMovies(res.data.movies))

  }, [ ])

  return (
    <div>
      <h1>영화정보 { movies.length }</h1>
      <Image src='https://plus.unsplash.com/premium_vector-1718623849317-d74224c64b51?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpbGx1c3RyYXRpb25zLWZlZWR8MTd8fHxlbnwwfHx8fHw%3D' 
                 width={ 150 } height={ 200 }
      />
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      {
        pageMovies.map( item => <Card key={ item.title } movie={ item }/>)
      }
      </div>

      <Pagination pagePerCount={ pagePerCount }
                  currentPage={ currentPage}
                  setCurrentPage={ setCurrentPage }
                  length={ movies.length }
        />

      
    </div>
  )
}

export default Movies
