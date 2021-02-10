import {useState, useEffect} from 'react';
import postRequest from './postRequest';
import { Hint } from 'react-autocomplete-hint';
import useFetchData from './useFetchData';

const Post = () => {
    const url='http://localhost:8000/authorList';
    const [author, setAuthor] = useState('');
    const [hintData, setHintData] = useState('');
    let data={author: author};

    const getDataHint = async (url) => {
        const rawResponse = await fetch(url);
        const response = await rawResponse.json();
        let hintArray=response.map(a=>a.author);
        setHintData(hintArray);
    }


    useEffect(()=>{
        getDataHint(url);
    },[])

    return ( 

        <div className="form">
            <Hint options={hintData} allowTabFill>
                <input name="author" id="author"
                    value={author} onChange={(e) => setAuthor(e.target.value)} />
            </Hint>

            <button onClick={(e)=>postRequest(url,data)}>Send</button>
        </div>
     );
}
 
export default Post;