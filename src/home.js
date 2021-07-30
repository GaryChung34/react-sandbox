import {Link} from "react-router-dom"

function Home() {
	return(
		<ul>
			<li>
				<Link to="/page1">to page1</Link>
			</li>
			<li>
				<Link to="/page2">to page2</Link>
			</li>
			<li>
				<Link to="/page3">to page3</Link>
			</li>
		</ul>
	)
}

export default Home