import React, {useState} from 'react'
import './App.css'



const SearchBar = ({onFormSubmit}) => {
        const [query, setQuery] = useState('');
        
    

        const onSubmit=event => {
            event.preventDefault();
            onFormSubmit(query)
      
        }

        return <div className="search-bar"> <div>
            <form onSubmit={onSubmit} className="form">
                <div className="field">
                    
                    <input value={query} type="text" placeholder="search" onChange={(e) => setQuery(e.target.value)} ></input>
                </div>
            </form>
           
            </div>
            </div>
    }





export default SearchBar;