import React, { useState } from 'react'

function Search({ setSearchTerm }) {
    const [value, setValue] = useState('')
    const handleChanges = (e) => {
        setValue(e.target.value)
        setSearchTerm(e.target.value)
    }
    return (
        <>
            <div className='search'>
                <input
                    type="text"
                    placeholder='Enter a product to search...'
                    value={value}
                    onChange={handleChanges}
                />
                <img className='searchIcon' src='https://e7.pngegg.com/pngimages/342/516/png-clipart-computer-icons-search-icon-zooming-user-interface-computer-icons-thumbnail.png' alt='search-icon' />
            </div>
        </>
    )
}

export default Search;