const useFetchData =  async (url) => {
    const rawResponse = await fetch(url);
    const response = await rawResponse.json();
    return response;
}

export default useFetchData;