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
			<a href="#" className="close"></a>
			<li>
				<a href="#item02">
					<img src="https://cdn.dribbble.com/users/545884/screenshots/3981307/lorena2.png" alt="" />
				</a>
			</li>

			<li>
				<a href="#item02">
					<img src="https://cdn.dribbble.com/users/545884/screenshots/3892302/contact.png" alt="" />
				</a>
			</li>

			<li>
				<a href="#item02">
					<img src="https://cdn.dribbble.com/users/545884/screenshots/4154721/dive--001.png" alt="" />
				</a>
			</li>
			<li>
				<a className="image" href="#item01">
					<img src="https://cdn.dribbble.com/users/545884/screenshots/4356121/darko--dr.jpg" alt="" />
				</a>
			</li>
			<li>
				<a className="image" href="#item02">
					<img src="https://cdn.dribbble.com/users/545884/screenshots/3695553/news.png" alt="" />
				</a>
			</li>
			<li>
				<a className="image" href="#item01">
					<img src="https://cdn.dribbble.com/users/545884/screenshots/4360101/liberosis_--_12.png" alt="" />
				</a>
			</li>
			<li>
				<a className="image" href="#item01">
					<img src="https://cdn.dribbble.com/users/545884/screenshots/3148799/technical-book.jpg" alt="" />
				</a>
			</li>
			<li>
				<a className="image" href="#item01">
					<img src="https://cdn.dribbble.com/users/545884/screenshots/2883479/cover.jpg" alt="" />
				</a>
			</li>
		</ul>
	</div>


	<div id="item01" className="port">
	
		<div className="row">
			<div className="description">
				<h1>Item 01</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis libero erat. Integer ac purus est. Proin erat mi, pulvinar ut magna eget, consectetur auctor turpis.</p>
			</div>

				<img src="https://cdn.dribbble.com/users/545884/screenshots/3981307/lorena2.png" alt="" />
			</div>
		</div>



	<div id="item02" className="port">
	
		<div className="row">
			<div className="description">
				<h1>Item 02</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis libero erat. Integer ac purus est. Proin erat mi, pulvinar ut magna eget, consectetur auctor turpis.</p>
			</div>
			<img src="https://cdn.dribbble.com/users/545884/screenshots/2883479/cover.jpg" alt="" />
		</div>

	</div>

</section>
</div>

</>
  );
}

export default App;
