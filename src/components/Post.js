import {useState} from 'react';
import postRequest from './postRequest';

const Post = () => {
    const url='http://localhost:8000/authorList';
    const [author, setAuthor] = useState('');
    let data={author: author};

    return ( 

        <div className="form">
            <input name="author" id="author"
            value={author} onChange={(e) => setAuthor(e.target.value)}></input>
            <button onClick={(e)=>postRequest(url,data)}>Send</button>
        </div>
     );
}
 
export default Post;