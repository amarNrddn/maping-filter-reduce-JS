// let masakNasi = {
//     bahan: "air",
//     nasi: "nasi",
//     wkatu: {
//         sedang: 5,
//         matang: 10,
//     },

//     air: {
//         sedang: 5,
//         matang: 10
//     },

//     memasak(waktu, air) {
//         console.log("sedang memasak")

//         if (waktu === this.wkatu.sedang && air === this.air.sedang) {
//             setTimeout(() => {
//                 console.log('nasi sedang sudah matang dengan sempurna')
//             }, 2000)
//         } else if (waktu === this.wkatu.matang && air === this.air.matang) {
//             setTimeout(() => {
//                 console.log('nasi matang sudah matang dengan sempurna')
//             }, 2000)
//         }  else {
//             return "maaf ada kesalahan dalam resep jadi gosong"
//         }
//         return "tunggu 10 menit"
//     }
// }

// const sedang = masakNasi.memasak(10, 10)
// console.log(sedang)

// const addBtn = document.getElementById('add')
// const score = document.getElementById('score')

// const count = () => {
//     let score = 0
//     return function () {
//         return ++score
//     }
// }

// let countBtn = count()

// addBtn.addEventListener('click', () => {
//     score.textContent = `${countBtn()}`
// })

// const member = [1,4,6,3,2,1,5,6,8,9]

// let newMembers = []
// for(let i = 0; i < member.length; i++) {
//     if(member[i] >=10){
//         newMembers.push(member[i])
//     } else {
//         console.log("item tidak di temukan")
//     }
// }

// console.log(newMembers)


const member = [1,4,6,3,2,1,5,6,8,9] //1,4,3,2,1,5 = 2,8,6,4,2,10

const newMember = member.filter(items => items <= 5).map(item => item * 2).reduce((acu, value) => acu + value)

console.log(newMember)