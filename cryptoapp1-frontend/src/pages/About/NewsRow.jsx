import React from 'react'

function NewsRow(props) {
    const {index, row} = props;

    return (
        <div class="col">
        <div class="card card-bordered">
        <img src={row.image.thumbnail.contentUrl} class="card-img-top" alt=""/>
        <div class="card-inner">
          <a class="card-text" href={row.url} target="_blank"><p class="card-text">{row.description.substring(0,40)}...
            </p></a>
        </div>
    </div>
    </div>
    )
}

export default NewsRow
