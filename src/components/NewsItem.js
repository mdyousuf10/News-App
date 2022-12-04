import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="card" style={{width: "22rem"}}>
      <img src={!imageUrl?"https://feeds.abplive.com/onecms/images/uploaded-images/2022/11/29/33b30afd6908dc45f628f4953378b2ae1669723248681324_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628":imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">Read More</a>
      </div>
    </div></div>
    )
  }
}

export default NewsItem