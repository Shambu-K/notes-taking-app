import {MdSearch} from 'react-icons/md';


export default function SearchBar(prop) {

    const handleChange = (event) =>{
        prop.handleSearchText(event.target.value)
    }

    return(
        <div className="search" onChange={handleChange}>
            <MdSearch className='search-icons' size='1.3em' />
            <input type='text' placeholder="Search here..."></input>

        </div>
    )
}