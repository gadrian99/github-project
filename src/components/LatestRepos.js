import React , { useState, useEffect } from 'react';
import axios from 'axios'

function LatestRepos() {
    const[repos, setRepos] = useState([])

    useEffect(() => {
        axios
            .get(`https://api.github.com/users/gadrian99/repos`)
            .then(res => {
                setRepos(res.data)
                // console.log(res.data.slice(0,5))
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <div>
            <h2 className="repo-header">Latest Repos</h2>
            <ul className="repo-list">
                {repos.map(repo => (
                    <li className="repo-text" key={repo.id}><a className="repo-link" href={repo.html_url}>Visit</a> {repo.name} </li>
                ))}
            </ul>
        </div>
    )
}

export default LatestRepos