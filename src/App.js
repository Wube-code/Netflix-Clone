import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./requests";
import Row from "./Row";

function App() {
	return (

			<div className="App">
			<Nav />
			<Banner />
			<Row title="Netflix Original"fetchUrl={requests.fetchNetflixOrginals} isLargeRow />
			<Row title="Trending Now"fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated Movies"fetchUrl={requests.fetchTopRatedMovies} />
			<Row title="Action Movies"fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies"fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies"fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies"fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries"fetchUrl={requests.fetchDocumentaries} />
			
			<Row title="Mystery"fetchUrl={requests.fetchMystery} />
			<Row title="SciFi"fetchUrl={requests.fetchSciFi} />
			<Row title="Western"fetchUrl={requests.fetchWestern} />
     

    </div>

				
	);
}

export default App;