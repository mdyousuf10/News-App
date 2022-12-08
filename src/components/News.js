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
   
 getArticles = async()=>{
   
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
        <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Top Articles</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="#" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline"> Total News Results {this.state.totalResult} </span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Top news channels</span> </a>
                       {this.state.articles.map((element)=>{
                            return <div className="container">
                                <a href={element.url} target='_blank' style={{color:'white'}}>{element.source.name}</a> 
                            </div> 
                       })}

                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Top Author</span> </a>
                            {this.state.articles.map((element)=>{
                            return <div className="container">
                              <span>{element.author}</span>
                            </div> 
                       })}
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
                    </li>
                </ul>
                <hr/>
                <div className="dropdown pb-4">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle"/>
                        <span className="d-none d-sm-inline mx-1">loser</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col py-3">
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
                </div>
            </div>
</div>

{/*  */}
      
      </>
    )
  }
}

export default News