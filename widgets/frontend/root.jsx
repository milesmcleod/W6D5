import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

class Root extends React.Component {
  render () {
    let array =  [
      {title: 'one', content: 'i am the first' },
      {title: 'two', content: 'i am the second' },
      {title: 'three', content: 'i am the third' }
    ];

    return (
      <div>
        <Clock/>
        <Tabs tabs={array}/>
      </div>
    );
  }
}

module.exports = Root;
