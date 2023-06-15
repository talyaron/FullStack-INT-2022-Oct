import { Link } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar";


function App() {
  return (
<>
  <NavBar />
<div className="appBox">
<header>
    <h1>My Projects</h1>
    <h2>[ Portfolio Gallery ]</h2>
</header>

<section className="gallery">
	<div className="row">
		<ul>
			<li>
				<Link to={"/About"}>
					<img src="https://i.ibb.co/bFB0rJs/Screenshot-2023-06-15-195008.png" alt="" />
				</Link>
			</li>

			<li>
			<Link to={"/"}>
					<img src="" alt="" />
				</Link>
			</li>

			<li>
			<Link to={"/"}>
					<img src="" alt="" />
				</Link>
			</li>
			<li>
			<Link to={"/"}>
					<img src="" alt="" />
				</Link>
			</li>
		</ul>
	</div>


	<div id="item01" className="port">
	
		<div className="row">
			<div className="description">
				<h1>Item 01</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis libero erat. Integer ac purus est. Proin erat mi, pulvinar ut magna eget, consectetur auctor turpis.</p>
			</div>

				<img src="" alt="" />
			</div>
		</div>



	<div id="item02" className="port">
	
		<div className="row">
			<div className="description">
				<h1>Item 02</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis libero erat. Integer ac purus est. Proin erat mi, pulvinar ut magna eget, consectetur auctor turpis.</p>
			</div>
			<img src="" alt="" />
		</div>

	</div>

</section>
</div>

</>
  );
}

export default App;
