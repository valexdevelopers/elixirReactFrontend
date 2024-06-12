// import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Login from './components/auth/Login'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/css/standards.css'

function App() {
	return (
		<div className="App">
			<div className="appContainer">
				<Home />
			</div>
			
			{/* <Router>
				<Routes>
					<Route path='/' element={<Home />}/>
					<Route path='/login' element={<Login />}/>
					
				</Routes>
			</Router> */}
		</div>
	);
}

export default App;
