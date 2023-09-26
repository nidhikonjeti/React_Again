import { useState } from "react";
import {useHistory} from "react-router-dom"

const Create = () => {
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [author,setAuthor]=useState('nidhi')
    const histroy=useHistory();


    const handleSubmit=(e)=>
    {
        e.preventDefault();
        const blog={title,body,author};

        fetch('http://localhost:8000/blogs',
        {
        
            method:'POST',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(blog)

        }).then(()=>
        {
            console.log('new blog added')
            
            //histroy.go(-1)
            histroy.push('/')
        })
    }
    return ( 
        <div className="create">
         <h2>add a new blog</h2>
         <form onSubmit={handleSubmit}>
            <label >BLog Title:</label>
            <input type="text"
            required
            value={title}
            onChange={(e)=>setTitle(e.target.value)}/>
            <label>Blog body:</label>
            <textarea value={body} onChange={(e)=>setBody(e.target.value)}required></textarea>
            <label>Blog Author:</label>
            <select
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}>
                <option value="nidhi">Mario</option>
                <option value="lode">lode</option>
            </select>
            <button>Add Blog</button>
         </form>
        </div>
     );
}
 
export default Create;