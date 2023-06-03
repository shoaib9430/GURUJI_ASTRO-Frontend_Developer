import "./App.css";
import Chart from "./components/Chart/Chart";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PremiumAstro from "./components/Premium/PremiumAstro";
import Testimonial from "./components/Testimonial/Testimonial";
import UserReview from "./components/UserReview/UserReview";
function App() {
	return (
		<div className="App">
			<Header />
			<div className="container-main">
				<Testimonial />
				<PremiumAstro />
				<Chart />
				<UserReview />
			</div>
			<Footer />
		</div>
	);
}

export default App;
