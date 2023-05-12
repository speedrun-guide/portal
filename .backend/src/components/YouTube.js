import React from 'react';

export default function YouTube({id, url, width, timestamp, dropdown = false}) {
    if (id == null && url == null) {
        console.error("YouTube component requires an ID or a URL, but neither was provided.")
        return null
    }

    if (url == null) {
        url = "https://www.youtube.com/embed/" + id
    } else if (!url.includes("/embed/")) {
        const match = url.match(/(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);

        if (match == null) {
            console.error("YouTube component requires a valid YouTube URL, but the provided URL was invalid.")
            return null
        }

        const id = match[4]
        url = "https://www.youtube.com/embed/" + id
    }

    if (timestamp != null) {
        url = url + "?start=" + timestamp;
    }


    let tag = (<div style={{display: "flex", justifyContent: "center"}}>
        <iframe style={{width: width != null ? width : "66%", aspectRatio: "16 / 9"}} src={url}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
    </div>);

    if(dropdown === true) {
        tag = (<details>
            <summary>Video</summary>
            {tag}
        </details>)
    }

    return tag
}