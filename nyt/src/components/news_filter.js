import React, { startTransition, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, newsItemsState } from "../store";

export default function NewsFilter() {
  // uncomment sections below and use the array to fill you select list
  const sections = ["home", "arts", "automobiles", "books", "business", "fashion", "food", "health", "insider", "magazine", "movies", "national", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "tmagazine", "travel", "upshot", "world"];

  const [selectedCategory, setSelectedCategory] = useRecoilState(categoryState);
  const newsItems = useRecoilValue(newsItemsState);

  function fetchData(selectedCategory) {
    try {
      // const newsItems = newsItemsState();
      console.log('Fetched news items:', newsItems);
    } catch (error) {
      console.error('Error fetching news items:', error);
    }
  }

  function updateSection(event) {
    setSelectedCategory(event.target.value);
  }

  useEffect(() => {
    startTransition(() => {
      fetchData(selectedCategory);
    });
  }, [selectedCategory]);

  function submitSection(event) {
    event.preventDefault();
    console.log('selected category:', selectedCategory);
    fetchData(selectedCategory); // You can call the function directly here too
  }

  return (
    <section className="callout secondary">
      <h5 className="text-center">Filter by Category</h5>
      <form>
        <div className="row">
          <div className="large-6 columns">
            <select onChange={updateSection}> {/* don't forget to create a controlled component */}
              {sections.map((section, index) => (
                <option key={index} value={section}>
                  {section}
                </option>
              ))}
            </select>
          </div>
          <div className="medium-6 columns">
            <button onClick={submitSection} className="button expanded">Retrieve</button>
          </div>
        </div>
      </form>
    </section>
  );

}
