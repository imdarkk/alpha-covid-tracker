import * as React from "react";
import "../css/SearchCard.css";

class SearchCard extends React.Component {
  render() {
    return (
        <div className="wrapperSearch">
          <input
            type="text"
            name="country"
            id="countrySearch"
            placeholder="Search"
          />
        </div>
    );
  }
}

export default SearchCard;
