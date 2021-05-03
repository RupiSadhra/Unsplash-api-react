import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component
{
    state={images:[]}

    onSearchSubmit=(term)=>
    {
        axios.get('https://api.unsplash.com/search/photos',{
        params:
        {
            query:term
        } ,  
        headers:
            {
                Authorization:'Client-ID jMvSv1v6rKZgCkN4M_RLxkJQDH1CzoKx7A2vO33clBI'
            }
           
        }).then((result)=>{
            this.setState({images:result.data.results})
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    render()
    {
        return <div className="ui container" style={{marginTop:'10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
         </div>
    }
}

export default App;