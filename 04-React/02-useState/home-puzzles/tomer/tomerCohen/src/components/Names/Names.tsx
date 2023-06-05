
const names= ["Tomer","Noam","Aviv","Idan","Tal","Itay"]

const Names= ()=>{
    const random = Math.floor(Math.random() * names.length);

    return(
        <div>
            <h1>{names[random]}</h1>
        </div>
    )
}

export default Names
