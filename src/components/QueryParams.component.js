import React from 'react';
import { Route, Link } from 'react-router-dom';

import { Content } from '../components';

class QueryParams extends React.Component {
  render() {
    const { match } = this.props;
    /*const { location, pattern, match, isExact } = this.props;*/
    return (
      <div>
        <h1>Reading the query parameters.</h1>
        <p>Check out the links below to view the queryparams value.</p>
        <div className="leftNavi">
          <ul>
            <li><Link to={{pathname: match.url + "/level1", search: '?abc=123'}} className="active">Level 1</Link></li>
            <li><Link to={{pathname: match.url + "/level2", search: '?xyz=987'}} className="active">Level 2</Link></li>
            <li><Link to={{pathname: match.url + "/level3", search: '?I=love_Dear'}} className="active">Level 3</Link></li>
          </ul>
        </div>
        <div className="rightContent">
          <p>Second Level Content will appear here:</p>
            <Route path={`${match.url}/:level`} component={Content} />
        </div>
      </div>
    );
  }
}

export default QueryParams;
