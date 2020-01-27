import React from 'react';
import axios from 'axios';
import Card from './Components/Card';
import FollowerCards from './Components/FollowerCards';

class App extends React.Component {
  state = {
    myGithub: {},
    myFollowers: []
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/Walter-Futch')
      .then(res => {
        console.log(res.data);
        this.setState({
          myGithub: res.data
        });
      })
      .catch(err => console.log('Nothing', err));

    axios
      .get('https://api.github.com/users/Walter-Futch/followers')
      .then(res => {
        console.log(res.data);
        this.setState({
          myFollowers: res.data
        });
      })
      .catch(err => console.log('You have no followers', err));
  }

  render() {
    return (
      <div>
        <h1>My Github Info</h1>
        <Card myGithub={this.state.myGithub} />
        <h2>My Followers</h2>
        <FollowerCards myFollowers={this.state.myFollowers} />
      </div>
    )
  }
}

export default App;
