import React, { useState, useRef } from "react";

function Search( props ){
    // let starsHtml = '';
    // for( let starCnt=1; starCnt<=5; starCnt++ ){
    //     starsHtml += ( props.rating >= starCnt 
    //         ? '<i class="fas fa-star text-warning"></i>'
    //         : '<i class="far fa-star"></i>' );
    // }


    const [ showBook, setShowBook ]= useState([]);
    const txtSearch = useRef();
    
    
    
    function searched(event) {
        event.preventDefault();
        console.log(txtSearch.current.value);

        searchbooks(txtSearch.current.value);
    }


    async function searchbooks( txtSearch ){    
        const apiBook = await fetch(`/api/book/${txtSearch}`).then( result=>result.json() );
        console.log(apiBook)
        setShowBook( apiBook );
    }

    return (
        <>
            
            <div class="row">
                JUMBO
            </div>


            <div class="row">
                Book Search
                <br/>
                <form>
                    <div class="form-group">
                        <label for="searchtxt"></label>
                        <input id="searchtxt" type="text" ref={txtSearch} class="form-control"></input>
                    </div>
                    <button onClick={searched} class="btn btn-primary submit">Search</button>
                </form>
            </div>



            <div class='row'>
                Search Result

                <div class="mb-3">
                    <ul class="col-6 list-group">
                        { showBook.map( book =>
                        <>
                        <li class="list-group-item">{book.volumeInfo.title}</li> 
                       
                        <li class="list-group-item"><img src={book.volumeInfo.imageLinks} class='img-thumbnail' /></li> 
                        <li class="list-group-item"><img src={book.volumeInfo.infoLink} class='img-thumbnail' /></li> 
                        <li class="list-group-item">{book.volumeInfo.description}</li> 
                        <li class="list-group-item">{book.volumeInfo.authors}</li> 
                        </>

                        
                        )}
                    </ul>
                </div>


                   
            </div>



        </>
    )
}


export default Search;