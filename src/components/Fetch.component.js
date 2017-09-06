import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getName, setName } from '../actions/User.actions';

class FetchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      submit:''
    }
  }

  onChange(e) {
    const data = e.target.value;
    this.setState({name: data});
  }

  onSubmit(e) {
    this.setState({submit: this.state.name});
    this.props.setName(this.state.name);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>This page was used to communicate to json data from localhost:5000/users (GET or POST) with Redux</h1>
        <div>Recieved data: {this.props.user.name}</div>
        <button onClick={() => {this.props.getName()}}>Click here to get data</button>
        <form onSubmit={this.onSubmit.bind(this) } >
          <input size="50" placeholder="Type somthing for POST data to server" onChange={this.onChange.bind(this)} />
          <button onClick={this.onSubmit.bind(this)}>Submit the data to server</button>
        </form>
        <div>Data: {this.state.name} </div>
        <div>submit: {this.state.submit} </div>
        { this.props.user.err !== ""? <strong>{ this.props.user.err }</strong>: null }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getName: () => {
      dispatch(getName());
    },
    setName: (name) => {
      dispatch(setName(name));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FetchPage));
