import React, { useEffect, useState } from 'react';

const App = () => {

    const [films, setFilms] = useState(null);
    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(awaitFilms => awaitFilms.json())
            .then(awaitFilms => {
                setFilms(awaitFilms)
                console.log(awaitFilms)
            })
    }, []);

    const [people, setPeople] = useState(null);
    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(awaitPeople => awaitPeople.json())
            .then(awaitPeople => setPeople(awaitPeople))
    });

    const [displayFilms, setDisplayFilms] = useState(false);
    const handleDisplayFilms = e => {
        e.preventDefault();
        setDisplayFilms(true);
        setDisplayPeople(false)
    };

    const [displayPeople, setDisplayPeople] = useState(false);
    const handleDisplayPeople = e => {
        e.preventDefault();
        setDisplayPeople(true)
        setDisplayFilms(false)
    };

    if (displayFilms === true && displayPeople === false) {
        return (
            <>
                <div className="container-fluid" id="page-wrapper">
                    <div className="row justify-content-center align-items-center">
                        <img className="col-md-4 my-4" src="https://filmschoolrejects.com/wp-content/uploads/2015/06/studio-ghibli-logo-1280x720.jpg" alt="studio ghibli logo" />
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <button onClick={handleDisplayFilms} className="btn btn-lg mx-5 my-2 col-sm-3">Films</button>
                        <button onClick={handleDisplayPeople} className="btn btn-lg mx-5 my-2 col-sm-3">People</button>
                    </div>

                    <div className=" row justify-content-center">
                        {films?.map(film => (
                            <div id='film-wrapper' key={film.id} 
                            className="card m-2 col-sm-10 col-md-10 col-lg-4 w-100" 
                            style={{ width: '18rem' }}>
                                <div className="card-body m-2 bg-light">
                                    <h5 className="card-title">Title: <span>{film.title}</span></h5>
                                    <p className="card-text">Description: <span>{film.description}</span></p>
                                    <hr />
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Release Date: <span>{film.release_date}</span></li>
                                        <li className="list-group-item">Rotten Tomatoes Score: <span>{film.rt_score}</span></li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    } else if (displayFilms === false && displayPeople === true) {
        return (
            <>
                <div className="container-fluid" id="page-wrapper">
                    <div className="row justify-content-center align-items-center">
                        <img className="col-md-4 my-4" src="https://filmschoolrejects.com/wp-content/uploads/2015/06/studio-ghibli-logo-1280x720.jpg" alt="studio ghibli logo" />
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <button onClick={handleDisplayFilms} className="btn btn-lg mx-5 my-2 col-sm-3 ">Films</button>
                        <button onClick={handleDisplayPeople} className="btn btn-lg mx-5 my-2 col-sm-3 ">People</button>
                    </div>

                    <div className="row justify-content-center">
                        {people?.map(person => (
                            <div id='people-wrapper' key={person.id} className="row card m-3 col-md-4 col-lg-4" style={{ width: '18rem' }}>
                                <div className="card-body m-3 bg-light">
                                    <h5 className="card-title">Name: <span>{person.name}</span></h5>
                                    <p className="card-text">Age: <span>{person.age}</span></p>
                                    <p className="card-text">Gender: <span>{person.gender}</span></p>
                                    <div className="card-body">
                                        <a href={person.url} target='blank' className="card-link">Card link</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )

    } else {
        return (
            <>
                <div className="container-fluid" id="page-wrapper">
                    <div className="row justify-content-center align-items-center">
                        <img className="col-md-6 col-sm-8 my-3" src="https://filmschoolrejects.com/wp-content/uploads/2015/06/studio-ghibli-logo-1280x720.jpg" alt="studio ghibli logo" />
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <button onClick={handleDisplayFilms}
                            className="btn btn-lg mx-5 my-2 col-sm-3 ">Films</button>
                        <button onClick={handleDisplayPeople} className="btn btn-lg mx-5 my-2 col-sm-3 ">People</button>
                    </div>


                    <div id='about' className="col-md-6 shadow pt-3 w-75">
                        <h2 className="text-center card-title">About this Page</h2>
                        <p className="text-center card-body">This page uses React to display endpoints from to two differents APIs </p>
                    </div>
                </div>
            </>

        )

    }
}

export default App;