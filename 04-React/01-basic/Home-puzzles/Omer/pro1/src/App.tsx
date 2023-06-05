import './App.css'
import Box from './components/Box/Box'

class Article{
  constructor(public header:string, public body:string, public auther:string){
  }
}

const article1 = new Article("Prince Harry due back in U.K. court as phone hacking case against tabloids resumes","London — Prince Harry is expected to testify in a U.K. court this week as the trial continues in his case against Britain's Mirror Group Newspapers (MGN). It is the first of three cases Harry is involved in against U.K. tabloids, which the prince alleges spied on him for scoops. His court appearance and cross examination will be the first in modern times for a senior member of Britain's royal family.","Haley Ott")
const article2 = new Article("Military jets scrambled due to unresponsive small plane over Washington that then crashed in Virginia","An unresponsive airplane flying over Washington, D.C., on Sunday prompted military fighter jets to intercept the plane at hypersonic levels, causing a loud sonic boom heard around D.C. and Virginia, officials said. The plane later crashed in Virginia and no survivors were found.","S. Dev")

const articles:Article[] = [article1,article2]

function App() {

  return (
      <div>
        <h1>CBS NEWS</h1>
        {articles.map((art)=><Box auther={art.auther} body={art.body} header={art.header}/>)}
      </div>
  )
}

export default App
