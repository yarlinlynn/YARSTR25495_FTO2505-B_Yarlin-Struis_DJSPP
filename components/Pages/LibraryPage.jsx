import React from 'react';
import Header from '../Header/Header.jsx';

function LibraryPage() {
  return (
    <>
        <Header/>
        <div className="page library-page">
            <header className='page-header'>
                <h2>Your Library</h2>
                {/* add dropdown for filter, all podcast and podcast date */}
                {/* search component */}
            </header>
            {/* all saved podcasts added to library */}
            <div className='my-podcast-container'></div>
        </div>
    </>
  );
}

export default LibraryPage;