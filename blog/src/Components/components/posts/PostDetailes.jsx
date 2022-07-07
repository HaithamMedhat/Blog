import React from 'react'
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../UI/Input';
import Textarea from '../UI/Textarea';

export default function PostDetailes(e) {
  const {data , update  } = e ;
  const inputTitleRef = useRef();
  const inputBodyRef = useRef();
  const {title , body , id } = data;

 
  return (
    <>
    <form onSubmit={(e)=>update(e , inputTitleRef.current.value ,inputBodyRef.current.value , id)}  >
      <h4 className="text-center">Post Details</h4>
      <Input 
      value={title}
       type ={"text"} 
       name ={"title"}
      labelName= {"Title"}
      ref={inputTitleRef}
      />
      <Textarea   
       type ={"text"} 
       name ={"Content"}
      labelName= {"Body"}
      ref={inputBodyRef} 
      value={body}
      /> 
       <button className='btn btn-info'>
         Update
      </button> 
    </form>
    
   </>
  )
}
