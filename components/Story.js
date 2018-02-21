import React from 'react';
import '../styles.less';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      data: []
    }
  }
  render() {
    console.log("this.props", this.props.story)
    return(
      <div>
        <table>
          <tr>
            <td>
              <img className='image' src={this.props.story.urlToImage}></img>
            </td>
            <td className='data'>
              <div className='top'>
                <div className='title'>{this.props.story.title}</div>
                <div className='author'>Source: {this.props.story.author}</div>
                <div className='description'>{this.props.story.description}</div>
              </div>
              <div className='bottom'>
                <a className='url' href={this.props.story.url}>{this.props.story.url}</a>
                <div className='published'>{this.props.story.publishedAt}</div>
              </div>  
            </td>
          </tr>
        </table>
        <p />
      </div>
    )
  }
}

export default Story;