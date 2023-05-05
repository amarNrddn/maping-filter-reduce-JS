const listVideo = Array.from(document.querySelectorAll("[data-duration]"))
const totalDurasi = document.getElementById('total-durasi')
const durasiJs = document.getElementById('durasi-js')

// ====== mencari durasi yang berjudul javascript lanjutan
//mencari element sesuai dengan judul
let videos = listVideo.filter(item => item.textContent.includes("Java Script Lanjutan"))

    //mepinng durasi video
    .map(item => item.dataset.duration)

    //meping dan menggati durasi yang awalnya setring menjadi integer
    .map(durasi => {
        const duration = durasi.split(":").map(durasi => parseFloat(durasi))
        return (duration[0] * 60) + duration[1]
    }).reduce((jam, menit) => jam + menit)   //menjumlahkan durasi yang sudah di pecah

const resultJam = Math.floor(videos / 3600)
videos = Math.floor(videos - resultJam * 3600)
const resultMenit = Math.floor(videos / 60)
const resultDetik = videos - resultMenit * 60


const resultHasil = `${resultJam}:${resultMenit}:${resultDetik}`
totalDurasi.textContent = `${resultHasil}`


// mencari durasi yang berjudul javascript
let javaScript = listVideo.filter(item => item.textContent.includes('Java Script Besick'))
    .map(item => item.dataset.duration)
    .map(durasi => {
        const duration = durasi.split(":").map(durasi => parseFloat(durasi))
        return (duration[0] * 60) + duration[1]
    }).reduce((jam, menit) => jam + menit)

const javascriptDurasi = Math.floor(javaScript / 3600)
javaScript = Math.floor(javaScript - javascriptDurasi * 3600)
const javaScriptMenit = Math.floor(javaScript / 60)
const menhitungMenit = () => {
    if (javaScriptMenit < 10) {
        const depan = "0" + javaScriptMenit
        return depan
    } else {
        return javaScriptMenit
    }
}

const javaScriptDetik = Math.floor(javaScript - javaScriptMenit * 60)

const tatalDurasiJs = `${javascriptDurasi}:${menhitungMenit()}:${javaScriptDetik}`
durasiJs.textContent = `${tatalDurasiJs}`
