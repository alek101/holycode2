import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addAuthors} from '../actions';

import fetchData from './fetchData';


const Home = () => {
    const url='http://localhost:8000/authorList';
    const dispatch = useDispatch();

    const getData =  async (url) => {
        const response = await fetchData(url);
        dispatch(addAuthors(response))
    }

    useEffect(()=>{
        getData(url);
    },[]);

    const authorList = useSelector(state=>state.authors);

    return ( 
        <div>
            <h1>Home</h1>
            <div>
                {authorList && authorList.map(c=>(<p key={c.id}>{c.id} - {c.author}</p>))}
            </div>
        </div>
        
     );
}
 
export default Home;