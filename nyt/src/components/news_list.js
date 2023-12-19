import { useEffect, useState } from 'react';
import NewsItem from './news_item';
import { useRecoilState, useRecoilValue } from 'recoil';
import { newsItemsState, categoryState } from '../store';

export default function NewsList() {

  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useRecoilState(categoryState);
  const newsItems = useRecoilValue(newsItemsState);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // No need to use NytApi.getPosts(section) directly, as it's handled by the Recoil selector
        // The Recoil selector already fetches and processes the data, and you can use it directly
        // without duplicating the logic here.
      } catch (error) {
        console.error('Something went wrong with the NYT api:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    }, [newsItems, selectedCategory]);

    const output = loading ? (
      // Show a loading indicator while data is being fetched
      <p>Loading...</p>
    ) : (
      newsItems.map((item, i) => (
        <div key={i} className="columns large-3 medium-6">
          <NewsItem post={item} />
        </div>
      ))
    );

  return (
    <section>
      <div className="row">
        {output}
      </div>
    </section>
  );

};
