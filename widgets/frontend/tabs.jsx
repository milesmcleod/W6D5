import React from 'react';

class Tabs extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tab: 0
    };
  }

  switchTab(tab) {
    this.setState({tab});
  }

  render(){
    return(
      <div className = 'tabs'>
        <ul className="tab-titles">
          {
            this.props.tabs.map((tab, idx) => (
              <li key={tab.title} className={this.state.tab === idx ? "selected" : "not-selected"}>
                <header onClick={(event) => this.switchTab(idx)}>{tab.title}</header>
              </li>
            ))
          }
        </ul>
        <article>
          {this.props.tabs[this.state.tab].content}
        </article>
      </div>
    );
  }


}



module.exports = Tabs;
