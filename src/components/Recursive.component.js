import React from 'react';
import { Route, Link } from 'react-router-dom';

class Recursive extends React.Component {
  render() {
    return (
      <div>
        <h1>Recursive paths</h1>
        <p>Keep clicking the links below for a recursive pattern.</p>
        { this.props.match.params && this.props.match.params.level != null? <div><em>You are on {this.props.match.params.level}. Click Below Link</em></div>:null}
        <div className="leftNavi">
          <ul>
            <li><Link to={this.props.match.url + "/level1"} className="active">Level 1</Link></li>
            <li><Link to={this.props.match.url + "/level2"} className="active">Level 2</Link></li>
            <li><Link to={this.props.match.url + "/level3"} className="active">Level 3</Link></li>
          </ul>
        </div>
        <div className="rightContent">
          <p>Second Level Content will appear here:</p>
            <Route path={`${this.props.match.url}/:level`} component={Recursive} />
        </div>
      </div>
    );
  }
}

export default Recursive;
