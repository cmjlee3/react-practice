import React, {Component} from 'react'
import HelloMessage from './HelloMessage/HelloMessage';
import ListContainer from './ListContainer/ListContainer';

class AppThree extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Bobby',
      interests: [
        'Coding',
        'Skiing',
        'Volleyball'
      ]
    };
  }

  render() {

    return (
      <div className="app-container">
        <HelloMessage name={this.state.name} />
        <ListContainer interests={this.state.interests} />
      </div>
    )
  }
}

export default AppThree;
