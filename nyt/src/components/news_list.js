import { useEffect, useState } from 'react';
import NytApi from '../apis/nyt_api';
import NewsItem from './news_item';
import { useRecoilState } from 'recoil';
import { homeState } from '../store';

export default function NewsList() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const section = useRecoilState(homeState);
  
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

    const output = items.map((item, i) => {
      return (
        <div key={i} className="columns large-3 medium-6">
          <NewsItem post={item}/>
        </div>
      )});

  return (
    <section>
      <div className="row">
        {output}
      </div>
    </section>
  );

};
