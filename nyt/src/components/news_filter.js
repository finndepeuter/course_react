export default function NewsFilter() {
  // uncomment sections below and use the array to fill you select list
  // const sections = ["home", "arts", "automobiles", "books", "business", "fashion", "food", "health", "insider", "magazine", "movies", "national", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "tmagazine", "travel", "upshot", "world"];

  function updateSection(event) {
  }

  function submitSection(event) {
    // prevent default behavior, otherwise the form is submitted and the application is restarted
    event.preventDefault(); 
    // add your code below

  }

  return (
    <section className="callout secondary">
      <h5 className="text-center">Filter by Category</h5>
      <form>
        <div className="row">
          <div className="large-6 columns">
            <select onChange={updateSection}> {/* don't forget to create a controlled component */}
              {/* show all sections */}
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
