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
        const apiBook = await fetch(`/api/books/${txtSearch}`).then( result=>result.json() );
        console.log(apiBook)
        setShowBook( apiBook );
    }


    async function savebook( book ){    
        // const apiBook = await fetch(`/api/books/${txtSearch}`).then( result=>result.json() );
        // console.log(apiBook)
        // setShowBook( apiBook );

        console.log("VVVVVVVV")
        console.log(book.booktitle);

        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({mybook:{ 
                booktitle : book.booktitle,
                bookimageLinks : book.bookimageLinks,
                bookinfoLink : book.bookinfoLink,
                bookdescription : book.bookdescription,
                bookauthors : book.bookauthors 
            }})
        };
        const apiBook = await fetch(`/api/books`, requestOptions).then( result=>result.json() );
        console.log(apiBook)
        // fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        //     .then(response => response.json())
            // .then(data => this.setState({ postId: data.id }));

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
                        {
                            
                        }
                        <button onClick={
                             
                            () => savebook( 
                                
                                {
                                    booktitle : book.volumeInfo.title,
                                    bookimageLinks : book.volumeInfo.imageLinks,
                                    bookinfoLink : book.volumeInfo.infoLink,
                                    bookdescription : book.volumeInfo.description,
                                    bookauthors : book.volumeInfo.authors
                                }

                             )}>Save in Mongo</button>
                        </>

                        
                        )}
                    </ul>
                </div>


                   
            </div>



        </>
    )
}


export default Search;