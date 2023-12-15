import { useEffect, useState } from 'react';
import NytApi from '../apis/nyt_api';

export default function useFetchPosts (section) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const result = await NytApi.getPosts(section);
            setItems(result.data.list);
          } catch (error) {
            console.log('Something went wrong with the NYT api.');
          }
          setLoading(false);
        }
    
        fetchData();
      }, [section]);
    
      return {
        items,
        loading,
      };
}