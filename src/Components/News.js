import React, { useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=> {
   const[articles,setArticles]=useState([]);
   const[loading,setLoading]=useState(true);
   const[page,setPage]=useState(1);
   const[totalResults,settotalResults]=useState(0);
   

  
 const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

 
 const updateNews=async()=> {
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d0d867cbdbf34931ad8d76a3851eb428&page=${page}&pagesize=${props.pageSize}`;
    //this.setState({ loading: true });
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(35)
    let parsedData = await data.json();
    props.setProgress(60)
    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setLoading(false)
    props.setProgress(100)
  }

  useEffect(()=>{
    document.title=`${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
  },[])
  
 
 {/*const handlePrevClick = async () => { 
    setPage(page - 1)
    updateNews();
  };
 const handleNextClick = async () => {
    setPage(page + 1)
    updateNews();
  };*/}
 const fetchMoreData =async() => {
    //this.setState({page:this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d0d867cbdbf34931ad8d76a3851eb428&page=${page}&pagesize=${props.pageSize}`;
    setPage(page + 1)
    //let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d0d867cbdbf34931ad8d76a3851eb428&page=${page}&pagesize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
  };
 return (
      <>
        <h1 className="text-center" style={{ margin: "32px,0px",marginTop:"90px" }}>
          NewsMonkey-Top HeadLines from {capitalizeFirstLetter(props.category)}
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
          {!loading &&
            articles.map((e) => {
              return (
                <div className="col-md-4" key={e.url}>
                  <NewsItem
                    title={e.title ? e.title : ""}
                    description={e.description ? e.description : ""}
                    imgUrl={e.urlToImage}
                    newsUrl={e.url}
                    author={e.author}
                    date={e.publishedAt}
                    source={e.source.name}
                  />
                </div>
              );
            })}
            </div>
           
        </div>
        </InfiniteScroll> 
      {/*  <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>*/}
      </>
    );
  
}
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.defaultProps = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
