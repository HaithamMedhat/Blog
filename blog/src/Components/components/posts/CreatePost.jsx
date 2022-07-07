import React from 'react';
import axios from 'axios'; 
import { useRef } from 'react';
import style from './CreatePost.module.css';
import { useNavigate } from 'react-router-dom'; 
 
export default function CreatePost() {  
    const titleInputRef  = useRef();
    const bodyInputRef  = useRef();
    const navigate = useNavigate();

    const createPost = async (e)=>{
        e.preventDefault();
        const postData = {
            title : titleInputRef.current.value,
            body : bodyInputRef.current.value
        }
        const data = await axios.post('https://zatonablog.herokuapp.com/api/posts' , postData); 
        if(data.statusText === "OK"){
            navigate('/posts')
        }
    }

  return (
    <React.Fragment>
        <div style={{width : '65%'}} className=" m-auto my-5">
        <h1>Create Post</h1>
        <form className={"my-2 " + style.form } onSubmit={createPost}>
            <div className="py-2">
                <label htmlFor="title">
                    Title
                </label>
                <input className="form-control" id='title' type="text" ref={titleInputRef} />
            </div>
            <div className="py-2">
                <label htmlFor="content">
                    Content
                </label>
                <textarea className="form-control" rows="5" id='content' type="text" ref={bodyInputRef} />  
                <button className='btn btn-info mt-4'>
                    submit
                </button>
            </div>
        </form>
        </div>
    </React.Fragment>
  )
}
