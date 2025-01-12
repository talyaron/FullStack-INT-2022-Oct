import './App.css'
import Box from './components/Box/Box'

class Article {
  constructor(public header: string, public body: string, public auther: string) {
  }
}

const article1 = new Article("Prince Harry due back in U.K. court as phone hacking case against tabloids resumes", "London — Prince Harry is expected to testify in a U.K. court this week as the trial continues in his case against Britain's Mirror Group Newspapers (MGN). It is the first of three cases Harry is involved in against U.K. tabloids, which the prince alleges spied on him for scoops. His court appearance and cross examination will be the first in modern times for a senior member of Britain's royal family.The North American Aerospace Defense Command (NORAD) deployed F-16 fighter jets to respond to the unresponsive Cessna 560 Citation V aircraft over Washington, D.C., and Virginia, NORAD said in a statement. The scramble was conducted by the 113th Fighter Wing of the D.C. National Guard, a U.S. official told CBS News. The NORAD aircraft were authorized to travel at supersonic speeds and a sonic boom may have been heard by residents of the region, NORAD said, adding that flares, which may have been visible to the public, were also used in an attempt to get the pilot's attention. Residents who happened to capture the sound of the fighter jets quickly took to social media, posting videos of the loud boom puncturing an otherwise seemingly quiet afternoon. ", "Haley Ott")
const article2 = new Article("Military jets scrambled due to unresponsive small plane over Washington that then crashed in Virginia", "An unresponsive airplane flying over Washington, D.C., on Sunday prompted military fighter jets to intercept the plane at hypersonic levels, causing a loud sonic boom heard around D.C. and Virginia, officials said. The plane later crashed in Virginia and no survivors were found.", "S. Dev")

const articles: Article[] = [article1, article2]

function App() {

  return (
    <div>
      <h1>CBS NEWS</h1>
      {articles.map((art) => <Box auther={art.auther} body={art.body} header={art.header} />)}
    </div>
  )
}

export default App
