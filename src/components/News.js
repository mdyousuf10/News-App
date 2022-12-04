import React, { Component } from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country:'in',
        pagesize:6,
        category:'general'
    }
    static propTypes = {
        country:PropTypes.string,
        pagesize: PropTypes.number,
        category:PropTypes.string
    }

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    // componentDidMount will run before render() function
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d0aa80623fff4f158629832120a5b6dd&page=1&pageSize=${this.props.pagesize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parseddata = await data.json()
        // console.log(parseddata)
        this.setState({
            articles : parseddata.articles,
             totalResult: parseddata.totalResults,
             loading:false
        })
    }

 
    handleNextClick = async () => {
        console.log("Next");
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
            this.setState({loading:true})
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading:false

            })
        }
    }
    handlePrevClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7”&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading:false
        })
    }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsMonkey-Top Headlines</h1>
       {this.state.loading && <Loading/>}
        <div className="row my-4 mx-4" >
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col md-3 my-3" key={element.url} >
             <NewsItem  title={element.title?element.title.slice(0,55):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}
         </div><div className="d-flex justify-content-between">
         <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr;
        Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
         </div>
         
        
      </div>
    )
  }
}

export default News