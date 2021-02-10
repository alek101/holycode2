import {useSelector, useDispatch} from 'react-redux';
import {addAuthors} from '../actions';

import useFetchData from './useFetchData';


const Home = () => {
    const url='http://localhost:8000/authorList';
    const dispatch = useDispatch();

    // const fetchData =  async (url) => {
    //     const rawResponse = await fetch(url);
    //     const response = await rawResponse.json();
    //     dispatch(addAuthors(response))
    // }

    
    const fetchData = useFetchData(url)
    .then(response => {dispatch(addAuthors(response))});

    const authorList = useSelector(state=>state.authors);

    return ( 
        <div>
            <h1>Home</h1>
            <button onClick={()=>{fetchData(url)}}>Call</button>
            <div>
                {authorList && authorList.map(c=>(<p key={c.id}>{c.id} - {c.author}</p>))}
            </div>
        </div>
        
     );
}
 
export default Home;