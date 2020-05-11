import express from 'express'

const app = express();

//middleware use will grab the request first
//do something to the request before use it.
app.use((req, res, next) => {
    console.log('<h1>Hellllo</h1>')

    //must call next to continue to .get
    next();
})

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req,res) => {
    res.send('testtest');
})


app.listen(3000);