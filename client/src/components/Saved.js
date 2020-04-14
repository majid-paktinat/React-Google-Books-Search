import React, { useState, useEffect, useRef } from "react";


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

    function viewlink(e){
        // console.log(myid.current[0]);
        window.location.assign(e.target.dataset.majid);

    }

    async function deletelink(e, data){

        console.log(e);console.log(data);

        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };

        const deleteResult = await fetch(`/api/books/`+data, requestOptions).then( result=>result.json() );
        if (!deleteResult) loadBooks();
    }
    

    return (
        <>
                <div class="mb-3">
                    <ul class="col-6 list-group">
                        { savedBooks.map( (book, index) =>
                        <>
                            <li class="list-group-item">{book.title}</li> 
                            <li class="list-group-item"><img src={book.image} alt="" class='img-thumbnail' /></li> 
                            {/* <li class="list-group-item"><a href={book.link} class='img-thumbnail'>view</a></li>  */}
                            <li class="list-group-item"><button data-majid={book.link} onClick={viewlink}>View</button></li> 
                            <li class="list-group-item"><button data-majid={book._id} onClick={(e)=>deletelink(e,book._id)}>Delete</button></li> 
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