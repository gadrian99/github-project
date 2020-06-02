import React , { useState, useEffect } from 'react';
import axios from 'axios'

function LatestRepos() {
    const[repos, setRepos] = useState([])

    useEffect(() => {
        axios
            .get(`https://api.github.com/users/gadrian99/repos`)
            .then(res => {
                setRepos(res.data.slice(0,5))
                console.log(res.data.slice(0,5))
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return(
        <div>
            <ul>
                {repos.map(repo => (
                    <li key={repo.id}>{repo.name}<a href={repo.html_url}>Link</a></li>
                ))}
            </ul>
        </div>
    )
}

export default LatestRepos