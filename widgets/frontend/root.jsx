import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import AutoComplete from './autocomplete';

class Root extends React.Component {
  render () {
    let array =  [
      {title: 'one', content: 'i am the first' },
      {title: 'two', content: 'i am the second' },
      {title: 'three', content: 'i am the third' }
    ];
    let names = ['spingus', 'grangle', 'hopper', 'spoonbill', 'jerry'];

    return (
      <div>
        <Clock/>
        <Weather/>
        <Tabs tabs={array}/>
        <AutoComplete names={names}/>
      </div>
    );
  }
}

module.exports = Root;
