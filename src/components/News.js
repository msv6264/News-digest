import React, { Component } from "react";
import NewsReader from "./NewsReader";
import Preloader from "./Preloader";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component"; 

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general",
    totalResults: 0,
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      pageSize: this.props.pageSize,
      loading: false,
      country: this.props.country,
      category: this.props.category,
    };
  }

  async componentDidMount() {
    this.fetchMoreData();
  }

  fetchArticles = async () => {
    this.setState({ loading: true });
    this.props.setProgress(10);
    
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    try {
      let data = await fetch(url);
      this.props.setProgress(30);
      let parsedData = await data.json();
      this.props.setProgress(60);
  
      if (parsedData.status !== "ok") {
        console.error("API Error:", parsedData);
        this.setState({ loading: false });
        return;
      }
  
      this.setState({
        articles: parsedData.articles ? this.state.articles.concat(parsedData.articles) : this.state.articles,
        totalResults: parsedData.totalResults || 0,
        loading: false,
      });
      this.props.setProgress(100);
    } catch (error) {
      console.error("Fetching articles failed:", error);
      this.setState({ loading: false });
    }
  };
  

  fetchMoreData = async () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
    this.fetchArticles();
  };  

  render() {
    return (
      <div className="container" style={{ padding: "4%", overflowX: "hidden" }}>
        <h2 className="ps-4">News Digest - Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} headlines</h2>

        {/* {this.state.loading && <Preloader />}  */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Preloader/>}
        >
            <div>
            <div className="row" style={{ maxWidth: "100%", overflowX: "hidden" }}>
              {this.state.articles.map((article) => (
                
                <div className="col-md-4" key={article.url}>
                  <NewsReader
                    className="news-card card shadow"
                    title={article.title || "No Title Available"}
                    description={article.description || "No Description Available"}
                    link={article.urlToImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZCIgfUfJUyzxTaCzWkZQIKzCltjNHq-Ti0g&s"} 
                    newsUrl={article.url}
                    author={article.author || "Unknown"} 
                    date={article.publishedAt || "No Date"}
                    source={article.source.name || "Unknown Source"}
                  />
                </div>
              ))}
            </div>
            </div>
        </InfiniteScroll>

        {(
          <>
            <div className="container d-flex justify-content-between">
            </div>
          </>
        )}
      </div>
    );
  }
}

export default News;
