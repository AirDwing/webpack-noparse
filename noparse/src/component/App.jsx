import React from 'react';
import jQuery from 'jquery';

export default class App extends React.Component {
  render() {
    console.log(jQuery);
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
      </div>);
  }
}
