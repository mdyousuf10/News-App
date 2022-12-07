import React, { Component } from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

import InfiniteScroll from "react-infinite-scroll-component";




export class News extends Component {
    static defaultProps = {
        country:'in',
        pagesize:6,
        category:'general'
    }
    static propTypes = {
        country:PropTypes.string,
        pagesize: PropTypes.number,
        category:PropTypes.string,
    }
    capitalizeFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1);
    }
    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResult:0
        }
        document.title = `NewsMonkey-${this.capitalizeFirstLetter(this.props.category)}`;
    }

    async updateNews(){
        this.props.setProgress(10);
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d0aa80623fff4f158629832120a5b6dd&page=${this.state.page}&pageSize=${this.props.pagesize}`
        this.setState({loading:true})
        let data = await fetch(url);
        this.props.setProgress(30);
        let parseddata = await data.json()
        this.props.setProgress(70);
        this.setState({
             articles : parseddata.articles,
             totalResult: parseddata.totalResults,
             loading:false,
             image1 : "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/GNTIWFUVDQI6TFLKRDBJDK24HA.jpg&w=1440"
        })
        await this.props.setProgress(100);
    }
    // componentDidMount will run before render() function
    async componentDidMount(){
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d0aa80623fff4f158629832120a5b6dd&page=1&pageSize=${this.props.pagesize}`
        // this.setState({loading:true})
        // let data = await fetch(url);
        // let parseddata = await data.json()

        // this.setState({
        //     articles : parseddata.articles,
        //      totalResult: parseddata.totalResults,
        //      loading:false
        // })
        this.updateNews();
    }

 
    handleNextClick = async () => {
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))) {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
        //     this.setState({loading:true})
        //     let data = await fetch(url);
        //     let parsedData = await data.json()

        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parsedData.articles,
        //         loading:false

        //     })
        // }
      console.log('next')
      this.setState({page:this.state.page+1});
      this.updateNews();
    }
    handlePrevClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
        // this.setState({loading:true})
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading:false
        // })
        console.log('previous')
        this.setState({page:this.state.page-1})
        this.updateNews();
    }
   
 fetchMoreData =    async () => {
        this.setState({page : this.state.page+1})
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d0aa80623fff4f158629832120a5b6dd&page=${this.state.page}&pageSize=${this.props.pagesize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parseddata = await data.json()

        this.setState({
             articles : this.state.articles.concat(parseddata.articles),
             totalResult: parseddata.totalResults,
             loading:false,
        })
      };

  render() {


    return (
        <>
      <div className='container my-3'>
        <h1 className='text-center' style={{color:this.props.mode==='dark'?'white':'black', margin:'20px'}}>NewsMonkey-Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
       {this.state.loading && <Loading/>}
       {/* used infiniteScroll npm package  */}
       <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResult}
          loader={<Loading/>}
        >
        <div className="row mx-2 my-2" >
            {this.state.articles.map((element,i)=>{
                return <div className="col md-3 my-3" key={i} >
                <NewsItem mode={this.props.mode} source={element.source.name} author={element.author} date={element.publishedAt} title={element.title?element.title.slice(0,55):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                
                </div>
            })}
         </div>
         </InfiniteScroll>
      </div>
      </>
    )
  }
}

export default News