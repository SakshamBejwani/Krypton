import React from 'react'

function HomeNewsRow(props) {
    const {index, row} = props;
    return (
        <div class="col  mb-2 ">
        <div class="card">
        {(row.image)
        ? (
            <>
            <div class=" w-100 h-50 ">
                <img src={row.image.thumbnail.contentUrl} class="card-img-top img-fluid" alt=""/>
             </div>
            </>
        ):(
            <>
                <div class=" py-5 d-flex justify-content-center align-items-center"> <h5 class="py-5">
                <div class="spinner-border text-light" role="status">
                    <span class="sr-only">Loading...</span>
                </div></h5
                ></div>
            </>
        )

        }
        <div class="card-inner">
          <a class="card-text" href={row.url} target="_blank"><p class="card-text none-decorate">{row.description.substring(0,50)}...
            </p></a>
        </div>
    </div>
    </div>
    )
}

export default HomeNewsRow
