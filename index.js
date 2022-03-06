import axios from 'axios';
// var clientId = '6a6928c07dbfe75'

// axios.get(`https://api.imgur.com/3/gallery/hot/viral/day/1?showViral=true&mature=false&album_previews=false`, {
//     headers: {
//         'Authorization':`Client-ID ${clientId}`
//     }
// })
// .then((res) => {
//     console.log(res)
// })
var clientId = '6a6928c07dbfe75'
    const promise = () => {
        return new Promise((resolve,reject) => {
            axios.get(`https://api.imgur.com/3/gallery/hot/viral/day/1?showViral=true&mature=false&album_previews=false`, {
                headers: {
                    'Authorization':`Client-ID ${clientId}`
                 }
            }).then(resolve => setTimeout(resolve, 5000)).catch((err) =>{
                reject(err)
            })
                })
    }
    promise()
// // fetch(`https://api.imgur.com/3/gallery/hot/viral/day/1?showViral=true&mature=false&album_previews=false`, {
// //     headers: {
// //         'Authorization':`Client-ID ${clientId}`
// //     }
// //   }).then((res) => console.log(res))
// // console.log(1)
// let url = `https://api.imgur.com/3/gallery/hot/viral/day/1?showViral=true&mature=false&album_previews=false`;
// async function topNews(){
//     let res = await fetch(url, {
//         headers: {
//                     'Authorization':`Client-ID ${clientId}`
//                 }
//     })
//     let data = await res.json();
//     console.log(data);
//     // return (data.articles);
// }

// topNews()