import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addPeople} from '../actions';
import { Hint } from 'react-autocomplete-hint';

import fetchData from './fetchData';


const Test2 = () => {
    const url='https://jsonplaceholder.typicode.com/users';
    const dispatch = useDispatch();

    const getData =  async (url) => {
        const response = await fetchData(url);
        console.log(response);
        dispatch(addPeople(response))
    }

    useEffect(()=>{
        getData(url);
    },[]);

    const peopleList = useSelector(state=>state.people);
    const hintData=peopleList.map(people=>people.name);
    const api_key="";

    return ( 
        <div>
            <h1>Test2 and Test3</h1>
            <div>
                {peopleList && peopleList.map(people=>(
                    <div key={people.id}>
                        <div>{people.name}</div>
                        <div>{people.address.street}</div>
                        <div>{people.address.suite}</div>
                        {/* <div>{people.address.geo.lat}</div>
                        <div>{people.address.geo.lng}</div> */}
                        <div>
                                <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${people.address.geo.lat},${people.address.geo.lng}&zoom=12&size=400x400&key=${api_key}`} alt="map"/>
                                
                        </div>
                    </div>
                ))}
            </div>
            <div>
            <Hint options={hintData} allowTabFill>
                <input name="something" id="something" />
                </Hint>
            </div>
        </div>
        
     );
}
 
export default Test2;