import React, {useState} from 'react';

import './App.css'
import Search from "./components/Search.jsx";

function App() {
const [searchTerm,setSearchTerm]=useState('');
  return (

        <main>
            <div className='pattern'/>
            <div className='wrapper'>
                <header>
                    <img src='../public/hero.png' alt='Hero Banner'/>
                    <h1>
                        Find <span className='text-gradient'>Movies</span> You'll Enjoy Without The Hassle
                    </h1>
                </header>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <h1 className='text-white'> {searchTerm}</h1>
            </div>


        </main>


  )
}

export default App
