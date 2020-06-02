import React, {useState, useEffect} from 'react';
import axios from 'axios'
import LatestRepos from './components/LatestRepos'
import './App.css';

const App = () => {
  const [name, setName] = useState([''])
  const [userName, setUserName] = useState([''])
  const [avatar, setAvatar] = useState([''])

  useEffect(() => {
    axios
        .get(`https://api.github.com/users/gadrian99`)
        .then(res => {
            setName(res.data.name)
            setUserName(res.data.login)
            setAvatar(res.data.avatar_url)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}, [])

  return (
    <div className="App">
      <h1>Github Fetch Project</h1>
      <h2>{name}</h2>
      <h2>{avatar}</h2>
      <h2>{userName}</h2>
      <LatestRepos />
    </div>
  );
}

export default App;
