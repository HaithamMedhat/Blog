import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import PostDetailes from './PostDetailes';
import { useNavigate } from 'react-router-dom';

export default function Posts() {
    const [showPost, setShowPost] = useState(false);
    const [specificPost , setSpecificPost] = useState([]); 
    const [posts, setPosts] = useState([]);

    const showContent = (e , id) => {
        setShowPost(true);
        setSpecificPost(e);
        navigate(`/posts/${id}`)
    }
    const navigate = useNavigate(); 
    const getData = async () => { 
        const { data } = await axios.get('https://zatonablog.herokuapp.com/api/posts');
        setPosts(data.posts); 
    } 
    const DeletePost = async (id)=>{ 
        await axios.delete(`https://zatonablog.herokuapp.com/api/posts/${id}`);
    }
    const updatePost = async (e , title , body , id )=>{
        e.preventDefault();
        e.stopPropagation();
        const postData ={
            title  , body
        }
         await axios.put(`https://zatonablog.herokuapp.com/api/posts/${id}` , postData ); 
         
    }
    useEffect(() => {
        getData();
    }, [posts])
    return (
        <div style={{
            width: '80%', margin: '40px auto'
        }}>
            <h2 className='my-2'>
                Posts
            </h2>
            <table className="table table-striped table-hover" >
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Header</th> 
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((e) => { 
                        return (
                            <tr key={e.id}>
                                <th scope="row">{e.id}</th>
                                <td>{e.title}</td> 
                                <td>
                                    <button className="btn btn-dark" onClick={()=>{showContent(e , e.id)}}>
                                        Update?
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=>DeletePost(e.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
            { showPost && <PostDetailes data={specificPost} update={updatePost}   />}
        </div>
    )
}
