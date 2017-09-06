import React from 'react';

class NoMatch extends React.Component {
  render() {
    return (
      <div>
        <h2>404: No Content for you at here {this.props.location.pathname}</h2>
      </div>
    );
  }
}

export default NoMatch;
