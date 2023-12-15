import NewsFilter from './news_filter';
import NewsList from './news_list';


export default function NewsReader() {

  return (
    <div>
      <h3 className="text-center">React News Reader</h3>
      <div>
        <NewsFilter />
      </div>
      <NewsList />
    </div>
  );
}
