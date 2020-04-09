import React, { useState, useRef } from "react";

function Search( props ){
    // let starsHtml = '';
    // for( let starCnt=1; starCnt<=5; starCnt++ ){
    //     starsHtml += ( props.rating >= starCnt 
    //         ? '<i class="fas fa-star text-warning"></i>'
    //         : '<i class="far fa-star"></i>' );
    // }

    const txtSearch = useRef();
    function searched(event) {
        event.preventDefault();
        console.log(txtSearch.current.value);
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



            <div class="row">
                Search Result
            </div>




        </>
    )
}

export default Search;