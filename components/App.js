import React from 'react';
import Story from './Story.js';

class App extends React.Component{

  constructor (props) {
    super(props);
    this.state = {
      newsList: []
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
          //this specific api returns these sorted already
          completeList.sort((a, b) => {
            let aDate = a.publishedAt.slice(0, 10);
            let aTime = a.publishedAt.slice(11, 19);
            let bDate = b.publishedAt.slice(0, 10);
            let bTime = b.publishedAt.slice(11, 19);
            if(Date.parse(aDate + ' ' + aTime) < Date.parse(bDate + ' ' + bTime)){
              return -1;
            } else if(Date.parse(aDate + ' ' + aTime) > Date.parse(bDate + ' ' + bTime)){
              return 1;
            } else {
              return 0;
            }

          })
          this.setState({
            newsList: completeList
          })
        })
        .catch(() => console.log('error with GET CNN news'))
      })
      .catch(() => console.log('error with GET BBC news'))
    })
    .catch(() => console.log('error with GET ABC news'))
  }

  render (){
    return (
      <div>
        <h1> Recent News </h1>
        {this.state.newsList.map(story =>
          <Story story={story}/>
        )}
      </div>
    )
  }
}

export default App