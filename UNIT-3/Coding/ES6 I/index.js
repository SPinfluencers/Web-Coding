
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=[YOUR_API_KEY}

const API =  "AIzaSyCA4j7mgLD5W8dtdsfqPBB-ZqbJrc6MBKw"

const serachVideo = async() => {
    try {
        const search = document.getElementById("query").value

        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${search}%202&key=${API}`)

        const data = await res.json()

        console.log(data.items)

        append(data.items)
    }

    catch(err) {
        console.log(err)
    }
}

const append = (video) => {
    let show_video = document.getElementById("show_video");
    show_video.innerHTML = null

    video.forEach(({id:{videoId} , snippet:{title}}) => {
        let div = document.createElement("div")

        let iframe = document.createElement("iframe");

        iframe.src = `https://www.youtube.com/embed/${videoId}`

        iframe.width = "100%"
        iframe.height = "100%"
        iframe.allow = "allowfullscreen"

        let name = document.createElement("h5")
        name.innerText = title;

        div.append( iframe , name)

        // let data = {
        //     title,
        //     videoId,
        // }

        // div.onclick = () => {
        //     showVideo(data)
        // }

        show_video.append(div);
    });
}

// const showVideo = (x) => {
//    window.location.href = "video.html"
//    localStorage.set("video", JSON.stringify(x));
// }