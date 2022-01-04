import React from 'react';
const keywordList = ["test", "testing"]

const keyword = (keyword, onClick) => {
  return (
    <div key={Math.random()} className="jl-keyword" onClick={onClick}>
      {keyword}
    </div>
  );
}

export const JobListing = ({listing, onClick}) => {
  const {logo, companyName, title, postedDate, type, location, newTag, featuredTag, keywords } = listing;
  
  return (
    <div className="jl-wrap">
      <img className="jl-logo flex-1" src={logo}/>
      <div className="jl-info">
        <div className="d-flex">
          <span className="jl-company-name">{companyName}</span>
          {newTag && <div className="jl-small-keyword new">NEW!</div>}
          {featuredTag && <div className="jl-small-keyword featured">FEATURED</div>}
        </div>
        <div className="jl-title">{title}</div>
        <div className="jl-details">{postedDate} &bull; {type}  &bull; {location}</div>
      </div>
      <div className="jl-keywords-wrap">
        {keywords.map(x => keyword(x, onClick))}
      </div>
    </div>
  )
  
}

export default JobListing;
