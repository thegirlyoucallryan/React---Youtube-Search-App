import React from 'react'
import './App.css'

class SearchBar extends React.Component {

    state={query: ''}
 
  onFormSubmit=event => {
      event.preventDefault();

      this.props.onFormSubmit(this.state.query)

  }
    render(){
        return <div className="search-bar"> <div>
            <form onSubmit={this.onFormSubmit} className="form">
                <div className="field">
                    <label>Video Search</label>
                    <input value={this.state.query} type="text" placeholder="search" onChange={(e) => this.setState({query: e.target.value})} ></input>
                </div>
            </form>
           
            </div>
            </div>
    }
    
} 

export default SearchBar;