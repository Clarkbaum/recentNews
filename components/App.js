import React from 'react';
import Story from './Story.js';

class App extends React.Component{

  constructor (props) {
    super(props);
    this.state = {
      newList: []
    }
  }

  componentDidMount() {
    let completeList = [];
    $.get('https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=0743d3c85acf40bf9eaf125623ca3ed5')
    .done((res) => {
      completeList = completeList.concat(res.articles)
      $.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=0743d3c85acf40bf9eaf125623ca3ed5')
      .done((res) => {
        completeList = completeList.concat(res.articles)
        $.get('https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=0743d3c85acf40bf9eaf125623ca3ed5')
        .done((res) => {
          completeList = completeList.concat(res.articles)
          console.log("completeList", completeList)
          console.log("this", this)
          this.setState({
            newList: completeList
          })
        })
        .catch(() => console.log('error with GET CNN news'))
      })
      .catch(() => console.log('error with GET BBC news'))
    })
    .catch(() => console.log('error with ABC news'))
  }

  render (){
    return (
      <div>
        <h1> Recent News </h1>
        <Story />
      </div>
    )
  }
}

export default App