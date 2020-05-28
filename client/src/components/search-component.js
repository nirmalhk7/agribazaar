import React from "react";
const Search = ({match,location}) =>{
    return (
        <p style={{paddingTop:"50px"}}>
          <strong>Query Params: </strong>
          {location.search}
          Match- {location.match}
        </p>
      );
}
export default Search