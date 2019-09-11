import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: [],
      user: {}
    };
  };

  componentDidMount() {
    this.getGithubUser();
    this.getGithubFollowers();
  }

  getGithubUser = async () => {
    let res = await axios.get('https://api.github.com/users/cowleyjosh');
    this.setState({
      user: res.data
    });
  };

  getGithubFollowers = async () => {
    let res = await axios.get('https://api.github.com/users/cowleyjosh/followers');
    this.setState({
      followers: res.data
    });
  };

  render() {
    const { user, followers } = this.state;
    return (
      <div className="App" >
        Github User Card
        <h1>{user.login}'s Github card!</h1>
        {followers.map(follower => (
          <h1>{follower.login}</h1>
        
        ))}
      </div>
    );
  }
}
export default App;