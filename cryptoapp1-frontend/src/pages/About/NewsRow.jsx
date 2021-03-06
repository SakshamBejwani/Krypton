import React from 'react'

function NewsRow(props) {
    const {index, row} = props;

    return (
        <div class="col">
        <div class="card card-bordered d-flex flex-column align-items-center">
        {(row.image)
        ? (
            <>
                <img src={row.image.thumbnail.contentUrl} class="card-img-top w-max-200px" alt=""/>
            </>
        ):(
            <>
                <div class=" w-max-120px py-5"> <h5 class="py-5">
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

export default NewsRow
