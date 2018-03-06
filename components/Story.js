import React from 'react';
import '../styles.less';

const Story = props => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <img className='image' src={props.story.urlToImage}></img>
            </td>
            <td className='data'>
              <div className='top'>
                <div className='title'>{props.story.title}</div>
                <div className='author'>Source: {props.story.author}</div>
                <div className='description'>{props.story.description}</div>
              </div>
              <div className='bottom'>
                <a className='url' href={props.story.url}>{props.story.url}</a>
                <div className='published'>{props.story.publishedAt}</div>
              </div>  
            </td>
          </tr>
        </tbody>
      </table>
      <p />
    </div>
  )
}

export default Story;