const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000

app.get('/', (req, res) => {
    res.send('Learning NodeMon, Hello NOde')
})
const users = [
    { id: 0, name: 'jhankar vai', email: 'jhankar@gmail.com', phone: '01856497825' },
    { id: 1, name: 'nayeem vai', email: 'nayeem@gmail.com', phone: '01856497825' },
    { id: 2, name: 'sumit vai', email: 'sumit@gmail.com', phone: '01856497825' },
    { id: 3, name: 'anis vai', email: 'anis@gmail.com', phone: '01856497825' },
    { id: 4, name: 'foyzul vai', email: 'foyzul@gmail.com', phone: '01856497825' },
    { id: 5, name: 'rijwan vai', email: 'rijwan@gmail.com', phone: '01856497825' },
]
app.get('/users', (req, res) => {
    const search = req.query.search
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
})
// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy fazli')
})

app.listen(port, () => {
    console.log('Listening to port 5000');
})