import { useEffect, useState } from 'react';
import NytApi from '../apis/nyt_api';
import NewsItem from './news_item';
import { useRecoilState, useRecoilValue } from 'recoil';
import { homeState } from '../store';

export default function NewsList() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const section = useRecoilValue(homeState);

  useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const result = await NytApi.getPosts(section);
          console.log('API response:', result);
          setItems(result.data.results);
        } catch (error) {
          console.log('Something went wrong with the NYT api.');
        }
        setLoading(false);
      }
  
      fetchData();
    }, [section]);

    const output = items ? (
      items.map((item, i) => (
        <div key={i} className="columns large-3 medium-6">
          <NewsItem post={item} />
        </div>
      ))
    ) : null;

  return (
    <section>
      <div className="row">
        {output}
      </div>
    </section>
  );

};
