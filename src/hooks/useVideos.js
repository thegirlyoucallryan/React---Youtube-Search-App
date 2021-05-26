import React, {useState, useEffect} from 'react';
import youtube from '../apis/youtube';


const useVideos = (defaultQuery) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        search(defaultQuery)

    }, [defaultQuery]);
    const search = async (query) => {
        const response = await youtube.get('/search', {
             params: {
                 q: query
             }
         });
         
            setVideos(response.data.items)
        
         };
         return [videos, search];

};

export default useVideos

