import axios from 'axios';

export function getName() {
  return {
    type: "GET_NAME",
    payload: axios.get("http://localhost:5000/users")
  }
}


export function setName(name) {
  return {
    type: "SET_NAME",
    payload: axios.post('http://localhost:5000/users', {name: name})
  }
}
