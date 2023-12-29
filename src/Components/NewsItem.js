import React from  'react';

const NewsItem=(props)=> {
  
    let{title,description,imgUrl,newsUrl,author,date,source}=props;
    return (
      <div className='my-3'>
        <div className="card">
        <div style={{display:"flex",
        justifyContent:"flex-end",
        position:"absolute",
        right:"0"}}>
        <span class="badge rounded-pill bg-success ">{source}</span>
        </div>
          <img src={!imgUrl?"https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/kadha-1703234589.jpg":imgUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem
