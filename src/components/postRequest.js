const postRequest = (url,data) => {
    const fetchOptions={
        method: 'POST',
        headers: {"Content-type":"application/json"},
        body: JSON.stringify({data})
    }

    fetchPost(url,fetchOptions);
}

const fetchPost = async(url,fetchOptions) => {
        const rawResponse = await fetch(url,fetchOptions);
        const response = await rawResponse.json();
        console.log(response);
    }

export default postRequest;