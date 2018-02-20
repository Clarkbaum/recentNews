import React from 'react';

class App extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    $.get('https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=0743d3c85acf40bf9eaf125623ca3ed5')
    .done(function(res) {
      console.log("res", res)
    })
  }

  render (){
    return (
      <div> this is my new react app </div>
    )
  }
}

export default App