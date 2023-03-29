import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.static('./public'));

app.use(express.json());

function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

class Article {
    public id: string;
    constructor(public header: string, public subject: string, public body: string) {
        this.id = uid();
    }
}

const allArticles: Article[] = [
    new Article("Test", "Test", "Hi, testing here"),
    new Article("Hello", "Greeting", "Formal way")
];

app.get('/all-articles', (req, res) => {
    try {
        res.send( allArticles );
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
})

app.post('/articles-delete', (req,res) => {
    try {
        const data = req.body;
        console.log(data);
        
        allArticles.splice(parseInt(data),1);
        res.status(200).send(true)
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
})

app.post('/articles-data', (req, res) => {
    try {
        const data = req.body;
        allArticles.push(data);
        res.status(201).send(true);
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
})





app.listen(PORT, () => console.log(`server listen on port ${PORT}`));