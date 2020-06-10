import react, {useState} from 'react';
import Modal from 'react-modal';
import List from './List.js';
import './assetd/style.css';
const ratingTab =[1,2,3,4];
const movies=[
    {
        title:'lacasa',
        poster:'https://www.serieously.com/wp-content/uploads/2019/11/Sans-titre-2019-11-14T171843.192-min.jpg',
        rating:4,
        year:2020
    },
    {
        titre:' prison-break',
        poster:'https://fr.web.img5.acsta.net/pictures/17/05/22/16/49/588696.jpg',
        rating:3,
        year:2005,
    },
    {
        titre:'The English Game',
        poster:' https://mrsturner6259.files.wordpress.com/2020/04/mv5bodq3mddlmgytyjjhmi00ytq5lwe3n2qtntc0ndezzdcwmzrmxkeyxkfqcgdeqxvymtmxodk2otu40._v1.jpg',
        rating:'4',
        year:2020,
    },
    {
        titre:'Elite',
        poster:'https://i.pinimg.com/736x/98/ed/67/98ed67f325105bd6fc610c7aec901037.jpg',
        rating:'5',
        year:2018',
        },

];


const Container = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [listOfMovies, setMovie] = useState(movies);

    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [rating, setRating] = useState('');
    const [year, setYear] = useState('');

    const openModal = () => { setIsOpen(true); }
    const closeModal = () => {
        setIsOpen(false);
        setTitle('');
        setPoster('');
        setRating('');
        setYear('');
    }
    
    };
    const addMovie = (e) => {
        e.preventDefault();
        let newMovie = {
            title: { title }.title ? { title }.title :"Missing title",
            poster: { poster }.poster ? { poster }.poster,
            rating: { rating }.rating ?{ rating }.rating : 1,
            year: { year }.year
        };
        closeModal();
        movies.push(newMovie)
        return setMovie(movies);

    }

    const handleSubmitMovie = (event) => {
       event.preventDefault();
        setMovie(movies);
        const search = document.querySelector('input[name="movie"]').value;
        const  find =  movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()) );
       
        return setMovie(find);
    }; 

    const handleChangeRating = (event) => {
        
        setMovie(movies);
        const rating =  movies.filter(movie => movie.rating == event.target.value);
        
        return rating.length >0 ? setMovie(rating) : setMovie(movies);
     };

    const handleReset = (event) => {
        return setMovie(movies);
    } 

    return (
        <section className="moviesContainer">
            <header>
                <button className="btn" onClick={openModal}>Add movie</button>
                <form onSubmit={handleSubmitMovie}>
                    <div className="selectGroup">
                        <input type="text" name="movie" placeholder="Filter by name"/>
                        <button className="btn" type="submit"><svg className="svg-icon" viewBox="0 0 20 20">
                            <path fill="#fff" d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                            </svg>
                        </button>
                    </div>
                </form>
                
                <div className="selectGroup">
                    <label className="btn">Filter by rating <span className="star"></span></label>
                    <select onChange={handleChangeRating}>{ratingTab.map((value) => <option key={value}>{value}</option>)}</select>
                </div>
                <button className="btn" onClick={handleReset}>Reset</button>
            </header>
            <div>
                <h1>Movie Bank</h1>
                <MoviesList movies={listOfMovies} />
            </div>


            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="modalHeader">
                    <strong>Add new movie</strong>
                    <button onClick={closeModal} className="btn">x</button>
                </div>
                <form  onSubmit={addMovie}>
                    <div className="formGroup">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" value={title} onChange={event => setTitle(event.target.value)}  required/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="poster">Poster url</label>
                        <input type="url" name="poster" id="poster" value={poster} onChange={event => setPoster(event.target.value)} required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="rating">Rating</label>
                        <input type="number" name="rating" id="rating" min="1" max="5" value={rating} onChange={event => setRating(event.target.value)} required/>
                        <small>Add number between 1 and 5</small>
                    </div>

                    <div className="formGroup">
                        <label htmlFor="year">Year</label>
                        <input type="number" name="year" id="year" maxLength="4" min="1910" max="2020" value={year} onChange={event => setYear(event.target.value)} />
                        <small>Add movies </small>
                    </div>
                    <div className="formGroup">
                        <button type="submit" className="btn">Add movie</button>
                    </div>


                </form>
            </Modal>

        </section>


    );
}

export default Container;
