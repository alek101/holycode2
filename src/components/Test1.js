import postRequest from './postRequest';

const Test1 = () => {

    const developerName = "Hi Developer Enter your Name: Aleksandar Petrovic";
    const url="http://mockbin.org/bin/08e5560b-befa-41f3-9397-9a774b8397a9";
    let data={"position": "reactJS", "devName": developerName};

    return ( 
        <div>
            <button onClick={(e)=>postRequest(url,data)}>Send Post Request</button>
        </div>

     );
}
 
export default Test1;