fetch('http://localhost:8080/users', {
    method: 'POST',
    body: JSON.stringify({
        username: "ModeratorIn Black Widow",
        role: "moderator"
    }),
    headers: {
        "Content-type": "application/json"
    }
}).then(res => {
    return res.json()
}).then((data) => {
        console.log("Created user with name: " + data.username + " and role: " + data.role)
    }
).catch(err => {
    console.log(err)
})

fetch('http://localhost:8080/users', {
    method: 'POST',
    body: JSON.stringify({
        username: "Reviewer Tony Stark",
        role: "user"
    }),
    headers: {
        "Content-type": "application/json"
    }
}).then(res => {
    return res.json()
}).then((data) => {
        console.log("Created user with name: " + data.username + " and role: " + data.role)
    }
).catch(err => {
    console.log(err)
})

fetch('http://localhost:8080/movies', {
    method: 'POST',
    body: JSON.stringify({
        title: "Marvel's The Avengers (2012)",
        description: "The avengers fight the Chitauri.",
        rating: 4
    }),
    headers: {
        "Content-type": "application/json"
    }
}).then(res => {
    return res.json()
}).then((data) => {
        console.log("Created movie with title: " + data.title)
    }
).catch(err => {
    console.log(err)
})

fetch('http://localhost:8080/movies', {
    method: 'POST',
    body: JSON.stringify({
        title: "Marvel's Avengers: Age of Ultron (2015)",
        description: "KI done wrong.",
        rating: 5
    }),
    headers: {
        "Content-type": "application/json"
    }
}).then(res => {
    return res.json()
}).then((data) => {
        console.log("Created movie with title: " + data.title)
    }
).catch(err => {
    console.log(err)
})

fetch('http://localhost:8080/movies', {
    method: 'POST',
    body: JSON.stringify({
        title: "Marvel's Avengers: Infinity War (2018)",
        description: "Hunting stones across the universe.",
        rating: 1
    }),
    headers: {
        "Content-type": "application/json"
    }
}).then(res => {
    return res.json()
}).then((data) => {
        console.log("Created movie with title: " + data.title)
    }
).catch(err => {
    console.log(err)
})

fetch('http://localhost:8080/movies', {
    method: 'POST',
    body: JSON.stringify({
        title: "Marvel's Avengers: Endgame (2019)",
        description: "Final fight against Thanos.",
        rating: 1
    }),
    headers: {
        "Content-type": "application/json"
    }
}).then(res => {
    return res.json()
}).then((data) => {
        console.log("Created movie with title: " + data.title)
    }
).catch(err => {
    console.log(err)
})