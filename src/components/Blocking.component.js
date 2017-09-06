import React from 'react';

import { Prompt } from 'react-router-dom';

class Blocking extends React.Component {
  constructor() {
    super();
    this.state = {isBlocking: false};
  }

  render() {
    const { isBlocking } = this.state;
    return (
      <div>
        <h1>Blocking a transition!</h1>
        <p>{this.props.location.pathname} You can block a transition and have a Navigation prompt with the appropriate message. If you try to go back from this page or navigate to some other page you will see a prompt showing up.</p>
        <form onSubmit={ e => {
          e.preventDefault()
          e.target.reset()
          this.setState({ isBlocking: false })
        }}>

          <Prompt
            when={isBlocking}
            message={location => (`Are you want to go to ${location.pathname}`)} />
          <p>Blocking? {isBlocking ? 'Yes, click a link or the back button': 'Nope'}</p>
          <p><input
              size="50"
              placeholder="type somthing to block transition"
              onChange={e => {this.setState({isBlocking: e.target.value.length >0}) }} />
          </p>
          <p><button>Submit to stop blocking</button></p>
        </form>
      </div>
    );
  }
}

export default Blocking;
