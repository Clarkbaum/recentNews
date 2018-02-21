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
            <td className='column'>
              <div className='data'>
                <div className='title'>{this.props.story.title}</div>
                <div className='author'>{this.props.story.author}</div>
                <div className='description'>{this.props.story.description}</div>
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