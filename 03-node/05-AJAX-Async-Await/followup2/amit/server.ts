import express from "express"

const app = express();

const port = 3000;

app.get("/", (req, res)=>{
    res.send("hi");
})

interface Flags{
    country: string;
    url: string;
}

const flags: Flags[] = [
    {
        country:"israel", url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAAB2CAMAAACwGoL7AAAAdVBMVEX///8WRrIGQLBMaL4rUbXj5/MAM60ORLEAPK8AKqsANq4AL6wAOK7z9foAOq/b4PD5+v2QntK2v+HK0enr7veostubqNaut911hsiWotTS2OzEy+YAJqpHYbpdc8F6jcszVrcjTLQ6W7hpesQAIKlrgMZ6gsYrmzRzAAACHElEQVR4nO3a226jMBCAYc8AHjCHhJTm2CbQw77/I67JaptDhRQqjeyp5rshojd/E4MBY0AaEzpgNi3mp8X8tJifFvPTYn5azE+L+WkxPy3mp8X8tJifwGKUxiTSGKWUUioudeiAueo/oQvm2hWb0Anz1BWmoRvm2TZgd6Ej5tgTAaVZ6IwZkpwaqLahMx53KIhWDl4WoUMeVb9i05pTg8dl6JQHrS0NtcmQ7Cp0ymOWlooxdWcJQrdMqrOL7pRjsvAf9j259uoPWUwTdzakF/7ENvR+2w8EeLU/janYrEv6AgDfPnlFXIO6SxGostY6n5nb/xAAnd82/ttOIjtxrBz151/9iK792rvN8TyNZAPZp0Blk97QnfxmU5K9fJndC5QHvz3m+TFY2ZQnB8XCdAO556u9raV+aQ4lYYTznx8B76Ztbsdr11P1vEzGOTA+3QdU6wY+bsfrpqDBz4FlZIfdP60jpPzzbm+ChODivCHpxrkD93d7D40/Kb9GNXlcrCxU38frZw7F/b8RC3HF8kaFuCNP3tlN3AwyOUunsc7S4q6EJq82z0dihFeb8q7oxd01ybsznbr7r6K9+78xPmEZ57ion7DcEvcUS+CTQnlPYwU+8Ra4qiBv5cbUjbTVMXkrkAJXeeWtpCullPr1Qr8APZvAt9LDvsb/A1rMT4v5aTE/Leanxfy0mJ8W89NiflrMT4v5aTE/Leb3Fx4DRz3gc9gdAAAAAElFTkSuQmCC"
    }
    {
        country:"colombia", url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACFCAMAAAApQEceAAAAMFBMVEX90RbOEScBOJPHEir/2wCXj1sAOZZSMH3PFCwAKJj60hgAK5oEOpQAO5dSMn7QFSpm0iebAAAA10lEQVR4nO3PMU4DURAFwWEBY/Dae//bGsnEREi0v6qCmfT1DPCrr/8e8FeE1AipEVIjpEZIjZAaITVCaoTUCKkRUiOkRkiNkBohNUJqhNQIqRFSI6RGSI2QGiE1QmqE1AipEVIjpEZIzTIhy3hbxLwvYi6fS7jMvn07/Zxn/du2P0Ken5AaITVCaoTUCKkRUiOkRkiNkBohNUJqhNQIqRFSs8/1tITr3D6WcJvXRczxsoRDSIyQGiE1QmqE1AipEVIjpEZIjZAaITVCaoTUCKkRUnPMeRF3LmFw3RvWL2YAAAAASUVORK5CYII="
    }
];


app.post("/api/get-flags", (req, res)=>{
    try {
        const data = req.body;
        console.log(data);
        flags.push(data);
        res.status(201).send({ ok: true });
    
      } catch (error: any) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
})

app.listen(port, ()=>{
    console.log(`server listen on ${port}`);
}) 