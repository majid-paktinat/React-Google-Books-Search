import React, { useState, useEffect } from "react";

function Saved( props ){
    const [ savedBooks, setSavedBooks ]= useState([]);
    
    // load only ONCE at component load
    var savedbooksapi = [];
    useEffect( function(){
        loadBooks();
    }, [] );

    ;
    async function loadBooks( ){    
        const apiBook = await fetch(`/api/books`).then( result=>result.json() );
        setSavedBooks(apiBook)
    }

    return (
        <>
                <div class="mb-3">
                    <ul class="col-6 list-group">
                        { savedBooks.map( book =>
                        <>
                            <li class="list-group-item">{book.title}</li> 
                            <li class="list-group-item"><img src={book.image} class='img-thumbnail' /></li> 
                            <li class="list-group-item"><a href={book.link} class='img-thumbnail'>link</a></li> 
                            <li class="list-group-item">{book.authors}</li> 
                            <li class="list-group-item">{book.description}</li> 
                        </>
                        )}
                    </ul>
                </div>
        </>
    )
}

export default Saved;