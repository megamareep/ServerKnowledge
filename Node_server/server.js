import express from 'express'
import fs from 'fs'//file system

const app = express();

//asyncronous
fs.readFile('./public/hello.json', (err, data) => {
    if(err) {
        console.log('erroooooor');
    }

    console.log('async', data.toString());
})

app.use(express.static(process.cwd() + '/public'))
app.listen(3000);


//blocking call
const file = fs.readFileSync('./public/hello.json');

console.log('sync', file.toString());





//middleware use will grab the request first
//do something to the request before use it.
// app.use((req, res, next) => {
//     console.log('<h1>Hellllo</h1>')

//     //must call next to continue to .get
//     next();
// })

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

// app.get('/', (req,res) => {
//     //console.log(req.query);//querystring
//     //console.log(req.body);
//     //console.log(req.headers);
//     //console.log(req.params);  /// /:id    post /1234 gives { id: '1234' }
//     res.status(404).send('Not Found');
// })