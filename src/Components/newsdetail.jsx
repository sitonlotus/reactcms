import React from 'react';
import {postData} from '../Api/index.js';

export default class Newsdetail extends React.Component{
  constructor(props){
    super(props);
    this.state={newsInfo:[]}
  }
  componentDidMount(){
    // console.log(this.props.match.params.id_news)
    postData('/student/newsinfo.php',{
      username:"lzl",
      userpwd:12345678,
      userclass:48,
      type:2,
      m:this.props.match.params.id_news
    }).then( res =>{
      if(res.status===200){
        this.setState({newsInfo:res.data[0]})
      }
    })
  }
  render(){
    console.log(this.state.newsInfo)
    

    return(
      <div className="news-detail">
        <h2>{this.state.newsInfo.title_news}</h2>
        <p>{this.state.newsInfo.time_news}</p>
        <div className="info" dangerouslySetInnerHTML={{__html:this.state.newsInfo.info_news}}></div>

      </div>
    )
  }
}