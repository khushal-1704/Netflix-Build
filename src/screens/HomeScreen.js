import React, { useEffect, useState } from 'react'
import Banner from '../Banner'
import './HomeScreen.css'
import Nav from '../Nav';
import requests from '../Request'
import Row from '../Row'


function HomeScreen() {
    const [show, handleShow] = useState(true);

    const transitionNavBar = () => {
        if (window.scrollY > 300) {
            handleShow(false)
        } else {
            handleShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => window.removeEventListener('scroll',
            transitionNavBar)
    }, [])

    return (
        <div className='homeScreen'>
            {show && <Nav />}
            <Banner />
            <Row
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row
                title='Trending Now'
                fetchUrl={requests.fetchTrending}
            />
            <Row
                title='Top Rated'
                fetchUrl={requests.fetchTopRated}
            />
            <Row
                title='Action Movies'
                fetchUrl={requests.fetchActionMovies}
            />
            <Row
                title='Comedy Movies'
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row
                title='Horror Movies'
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row
                title='Romance Movies'
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row
                title='Documentaries'
                fetchUrl={requests.fetchDocumentaries}
            />

        </div>
    )
}

export default HomeScreen
