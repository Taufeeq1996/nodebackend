// console.log('nothing but JavaScript');

require('dotenv').config()

const express = require('express') 

// import express from "express";
const app = express()
const port = 3000

const githubData = {
  "login": "Taufeeq1996",
  "id": 100328416,
  "node_id": "U_kgDOBfrj4A",
  "avatar_url": "https://avatars.githubusercontent.com/u/100328416?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Taufeeq1996",
  "html_url": "https://github.com/Taufeeq1996",
  "followers_url": "https://api.github.com/users/Taufeeq1996/followers",
  "following_url": "https://api.github.com/users/Taufeeq1996/following{/other_user}",
  "gists_url": "https://api.github.com/users/Taufeeq1996/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Taufeeq1996/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Taufeeq1996/subscriptions",
  "organizations_url": "https://api.github.com/users/Taufeeq1996/orgs",
  "repos_url": "https://api.github.com/users/Taufeeq1996/repos",
  "events_url": "https://api.github.com/users/Taufeeq1996/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Taufeeq1996/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 33,
  "public_gists": 0,
  "followers": 1,
  "following": 0,
  "created_at": "2022-02-24T02:16:44Z",
  "updated_at": "2024-01-27T01:44:24Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github', (req,res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
}) 

app.get('/login', (req,res) => {
    res.send('<h1>Hi Taufeeq</h1>')
    console.log('nothing');
})