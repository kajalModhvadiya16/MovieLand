import {useState,useEffect} from 'react';// this is hook, here want to fetch the data from the api as soon as the component loads
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';

const API_URL = 'http://omdbapi.com?apikey=6817b2f1';

 const App = () =>{
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        searchMovies('Shrek')
   
    },[])
    
    //secound arg, if we only wanna call at start
    //have to call a funtion that's gonna fetch our movies
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)//fetch is used to make the HTTP request. await = the code will pause at this line until the fetch request is complete.
        const data = await response.json();//method is used to read the response body and parse it as JSON . The response object is what you get back after making a fetch request. 

        setMovies(data.Search);
    }
 

    return(
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
        { movies?.length>0
           ?(
            //here, we are dynamically looping movies array which is fetch from an api,then taking each individual movie and dynamocally passing it as a prop 
            <div className='container'>
                {movies.map((movie) => (
                    <MovieCard movie = {movie}/>
                ))}
            </div>
            ) : (
                <div className='empty'>
                    <h2>No Movies Found</h2>
                </div>
            )
        }

        
        </div>
    );
 }
export default App;