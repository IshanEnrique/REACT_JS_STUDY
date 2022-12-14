import React, { Component } from "react";
import Loader from "./Loader";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  articles = [
    {
      source: { id: "bbc-sport", name: "BBC Sport" },
      author: null,
      title: "'Cricket has come home to Pakistan'",
      description:
        "Test Match Special commentator and comedian Aatif Nawaz reflects on the importance of England's historic tour to Pakistan.",
      url: "http://www.bbc.co.uk/sport/cricket/63955845",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/5576/production/_127987812_gettyimages-1448268827.jpg",
      publishedAt: "2022-12-13T10:37:25.5396172Z",
      content:
        "Pakistan fans have held up signs thanking England players for visiting throughout the tour\r\nAs I sat down to begin my first commentary stint of this historic tour, I couldn't help but smile. It felt … [+2810 chars]",
    },
    {
      source: { id: "new-scientist", name: "New Scientist" },
      author: null,
      title: "Fossils reveal the dinosaur era's changing insect soundscape",
      description:
        "Bush crickets from the Triassic era onwards evolved high-frequency songs to avoid being heard by predators",
      url: "https://www.newscientist.com/article/2351116-fossils-reveal-the-dinosaur-eras-changing-insect-soundscape/",
      urlToImage:
        "https://images.newscientist.com/wp-content/uploads/2022/12/12153643/SEI_137319297.jpg",
      publishedAt: "2022-12-12T00:00:00Z",
      content:
        "By Christa Lesté-Lasserre\r\nA male katydid fossil from the Early Cretaceous period\r\nBo Wang\r\nCricket-like insects once had a much greater musical range than those alive today, according to researchers… [+3588 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];

  static defaultProps = {
    newsApi: {},
    category: "general",
  };

  constructor() {
    super();

    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      pageSize: 20,
      totalRecords: 20,
      nextBtnEnable: true,
    };
  }

  async fetchHeadlines(updatedPageNo) {
    debugger;
    let url = `${this.props.newsApi.baseUrl}${this.props.newsApi.apiVersion}${this.props.newsApi.newsType}country=${this.props.newsApi.country}&category=${this.props.category}&apiKey=${this.props.newsApi.apiToken}&page=${updatedPageNo}&pageSize=${this.props.newsApi.pageSize}`;
    console.log("URL : " + url);
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // if (data.ok) {
    //   console.log("DATA WHEN API FAILS : " + data);
    //   let parsedData = await data.json();
    //   this.setState({
    //     articles: parsedData.articles,
    //     totalRecords: parsedData.totalResults,
    //     pageSize: this.props.newsApi.pageSize,
    //     loading: false,
    //   });
    // }else{
    //   this.setState({ loading: false });
    // }
  }

  async componentDidMount() {
    this.fetchHeadlines(this.state.page);
  }

  handlePrevPage = () => {
    let previousPageNo = this.state.page;
    if (previousPageNo > 1) {
      let updatedPageNo = previousPageNo - 1;
      this.setState({ page: updatedPageNo });
      this.fetchHeadlines(updatedPageNo);
    }
  };
  handleNextPage = () => {
    let previousPageNo = this.state.page;
    let updatedPageNo = previousPageNo + 1;
    let pageSize = this.state.pageSize;
    let totalRecords = this.state.totalRecords;
    console.log(
      pageSize +
        " , Next Page clicked > Ceild : " +
        Math.ceil(totalRecords / pageSize) +
        "  , updated page : " +
        updatedPageNo
    );
    if (updatedPageNo <= Math.ceil(totalRecords / pageSize)) {
      console.log("if condition");
      this.setState({ page: updatedPageNo });
      this.fetchHeadlines(updatedPageNo);
    } else {
      console.log("else condition");
      this.setState({
        nextBtnEnable: false,
      });
    }
  };

  fetchMoreData = async () => {
    let previousPageNo = this.state.page;
    let updatedPageNo = previousPageNo + 1;
    let pageSize = this.state.pageSize;
    let totalRecords = this.state.totalRecords;
    console.log("Infinite Scroll ");
    if (updatedPageNo <= Math.ceil(totalRecords / pageSize)) {
      console.log("if condition");
      this.setState({ page: updatedPageNo });
      this.fetchHeadlines(updatedPageNo);

      let url = `${this.props.newsApi.baseUrl}${this.props.newsApi.apiVersion}${this.props.newsApi.newsType}country=${this.props.newsApi.country}&category=${this.props.category}&apiKey=${this.props.newsApi.apiToken}&page=${updatedPageNo}&pageSize=${this.props.newsApi.pageSize}`;
      console.log("URL : " + url);
      // this.setState({ loading: true });
      // let data = await fetch(url);
      // if (data.ok) {
      //   let parsedData = await data.json();
      //   this.setState({
      //     articles: this.state.articles.concat(parsedData.articles),
      //     totalRecords: parsedData.totalResults,
      //     pageSize: this.props.newsApi.pageSize,
      //     loading: false,
      //   });
      // }else{
      //   this.setState({ loading: false });
      // }
    }
  };

  render() {
    return (
      <>
        <h2 style={{ marginTop: "33px" }}>NewsTota Top Headlines</h2>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.articles.length !== this.state.totalRecords}
          loader={this.state.loading && <h1>Loading...</h1>}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={
                        element.title
                          ? element.title.slice(0, 45)
                          : "No Title Available..."
                      }
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : "No description to read..."
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      publishedAt={element.publishedAt}
                      sources={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
