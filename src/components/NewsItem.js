import React, { Component } from 'react'


export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className={`container className="d-flex justify-content-between text-text-${this.props.mode==='dark'?'white':'dark'}`} style={{color:this.props.mode==='dark'?'white':'black'}}>
        <div className="card" style={{width: "18rem",}}>
          <div style={{
            display:'flex',
            justifyContent: 'flex-end',
            position : 'absolute',
            right:'0'
          }}>
        <span className="badge rounded-pill bg-danger" >
    {source}</span>
    </div>
       
      <img src={!imageUrl?"https://feeds.abplive.com/onecms/images/uploaded-images/2022/11/29/33b30afd6908dc45f628f4953378b2ae1669723248681324_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628":imageUrl} className="card-img-top" alt="..." />
      <div className="card-body" style={{backgroundColor:this.props.mode==='dark'?'black':'white'}}>
        <h5 className="card-title">{title} 
        </h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">By {!author?'unknown':author}  on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} rel="noopener noreferrer" target="_blank" className="btn btn-dark">Read More</a>
      </div>
    </div>
    </div>
    )
  }
}

export default NewsItem