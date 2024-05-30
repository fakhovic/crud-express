import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

let users = [{
        id: 1,
        name: 'Mark Zuckerbeg',
        job: 'CEO',
        theme: 'primary',
    },
    {
        id: 2,
        name: 'Sandhika Galih',
        job: 'Web Developer',
        theme: 'secondary',
    }
]
let currentId = users.length + 1;
app.get('/', (req, res) => {
    res.render('index', {
        users
    });
});
app.post('/add', (req, res) => {
    const newItem = {
        id: currentId++,
        name: req.body.name,
        job: req.body.job,
        theme: req.body.theme,
    };
    users.push(newItem);
    console.log(users);
    res.redirect('/');
});
app.post('/edit/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    let updates = req.body;
    updates = Object.entries(updates).filter(([key, value]) => value !== '');
    updates = Object.fromEntries(updates);
    users = users.map(item => (item.id === itemId ? {
        ...item,
        ...updates
    } : item));
    res.redirect('/');
});
app.post('/delete/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    users = users.filter(item => item.id !== itemId);
    res.redirect('/');
});
app.listen(port);