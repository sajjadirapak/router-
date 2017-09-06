import React from 'react';
import { Route, Link } from 'react-router-dom';

import { Content } from '../components';

class BasicRouting extends React.Component {
  render() {
    return (
      <div>
        <h1>BasicRouting</h1>
        <p>With the help of "Match" Component we can specify the Component we want to render for a particular pattern of the App loction/window.pathname.</p>
        <p>Select a level from Left Navigation to view the content, also notice the change in URL.</p>
        <div className="leftNavi">
          <ul>
            <li><Link to={this.props.match.url + "/level1"} className="active">Level 1</Link></li>
            <li><Link to={this.props.match.url + "/level2"} className="active">Level 2</Link></li>
            <li><Link to={this.props.match.url + "/level3"} className="active">Level 3</Link></li>
          </ul>
        </div>
        <div className="rightContent">
          <p>Second Level Content will appear here:</p>
            <Route path={`${this.props.match.url}/:level`} component={Content} />
        </div>
      </div>
    );
  }
}

export default BasicRouting;
