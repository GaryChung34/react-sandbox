import {Link} from "react-router-dom"

function Page1() {
	return(
		<div>
			<h1>This is Page 1.</h1>
			<Link to="/">Back to home</Link>
		</div>
	)
}

export default Page1