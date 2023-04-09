import express from 'express';
import fs from 'fs'
import { v4 as uuid } from 'uuid'
const app = express();

app.use(express.static('./public'))
app.use(express.json())

class articale {
    name:string;
    articleDesctiption:string;
    uid:string;
    imageURL:string;

    constructor(name:string,articleDesctiption:string, imageURL:string){
        this.name = name;
        this.articleDesctiption = articleDesctiption;
        this.imageURL = imageURL
        this.uid = uuid()
    }
}

const articales:any[] = []
app.get('/', (req,res) => {

    const index = fs.readFileSync('index.html', {encoding:'utf8', flag:'r'});
    res.send(index);
})
app.get('/api/get-articales', (req,res) => {

    res.send({articales});
})

app.post('/api/add-articale', (req,res) => {
    try {
        const newArticale = req.body;
        let articaleExists = false;
        if (articales.length > 0){
            for (let i = 0 ; i<articales.length; i++){
                if (articales[i].name == newArticale.name && articales[i].articleDesctiption == newArticale.articleDesctiption){
                    articaleExists = true
                    res.status(400).send({ok:false, status:'Articale already exists'});
                }
            }
            if (articaleExists == false){
                articales.push(new articale(newArticale.name, newArticale.articleDesctiption, newArticale.imageURL));
                res.status(201).send({ok:true});
            }
        }else {
            articales.push(new articale(newArticale.name, newArticale.articleDesctiption, newArticale.imageURL));
            res.status(201).send({ok:true});
        }
        
    } catch (error) {
        res.status(400).send({ok:false});
        console.log(error);
    }
})


app.listen(5000, () => {
    console.log("Server is running on port 5000");
})