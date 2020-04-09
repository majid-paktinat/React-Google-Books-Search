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
        const apiProduct = await fetch(`/api/book/${txtSearch}`).then( result=>result.json() );
        setShowBook( apiProduct );
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
                    <div class='col-4'>
                        <img src={showBook.image} class='img-thumbnail' />
                    </div>
                    <div class='col-8'>
                        <h1>{showBook.title}</h1>
                        <h2>{showBook.description}</h2>

                        {/* <h3><RatingBar rating={showProduct.rating} /></h3> */}

                        {/* <ProductAction /> */}
                        {/* <button onClick={addToCart} class="btn btn-lg btn-primary"><i class="fas fa-cart-plus"></i></button> */}
                        
                    </div>
                    {/* {showBook.description} */}
            </div>



        </>
    )
}


export default Search;