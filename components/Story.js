import React from 'react';

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
        <div>{this.props.story.title}</div>
        <div>{this.props.story.author}</div>
        <div>{this.props.story.url}</div>
        <div>{this.props.story.publishedAt}</div>
        <p />
      </div>
    )
  }
}

export default Story;