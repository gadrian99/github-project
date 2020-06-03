import React, {useState, useEffect} from 'react';
import axios from 'axios'
import LatestRepos from './components/LatestRepos'
import './App.css';

const App = () => {
  const [name, setName] = useState([''])
  const [userName, setUserName] = useState([''])
  const [avatar, setAvatar] = useState([''])
  const [followers, setFollowers] = useState(0)
  const [following, setFollowing] = useState(0)
  const [totalRepos, setTotalRepos] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios
        .get(`https://api.github.com/users/gadrian99`)
        .then(res => {
            setName(res.data.name)
            setUserName(res.data.login)
            setAvatar(res.data.avatar_url)
            setFollowers(res.data.followers)
            setFollowing(res.data.following)
            setTotalRepos(res.data.public_repos)
            setLoading(false)
            // console.log(res.data)

        })
        .catch(err => {
            console.log(err)
        })
}, [])

  if (loading) {
    return <p className="loading-text">Loading info...</p>
  }

  return (
    <div className="content-wrapper">
      <div className="header">
        <h1 className="header-text">Github Fetch Project</h1>
      </div>
      <div className="card">
        <h2 className="card-header">{name} / <span>{userName}</span></h2>
        <img className="card-img" src={avatar} alt="avatar-img"></img>
        <div className="social-wrapper">
          <p className="social-text">Followers: {followers}</p>
          <p className="social-text">Following: {following}</p>
        </div>
        <p className="social-text-secondary">Repos: {totalRepos}</p>
        <LatestRepos />
      </div>
    </div>
  );
}

export default App;
