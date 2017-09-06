import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import fakeAuth from '../Auth';

export default class ProtectedPage extends Component {
  constructor() {
	super();
        this.state = { signedOut: false}
  }

  sigout() {
        fakeAuth.signout(() => {this.setState({signedOut:true})})
  }

  render() {
    const { signedOut } = this.state
    return (
        <div>
          {signedOut && (<Redirect to='/'/>)}
          <h1>Protected Page</h1>
          <p>You are signed in go back to some other page and come back here.</p>
          <p>You can sign out to view the login page again.</p>
          <button onClick={this.sigout.bind(this)}>Sign out</button>
        </div>
      )
  }
}
