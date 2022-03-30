// ? Soniya, kvartal, sonlarni tartib bilan chiqarish

// ! Kvartal

// let num = prompt('Oylarni sonlarda kiriting.')
// if (num >= 1 && num <= 3) {
//     alert("1-kvartal")
// } else if (num >= 4 && num <= 6) {
//     alert('2-kvartal')
// } else if (num >= 7 && num <= 9) {
//     alert('3-kvartal')
// } else if (num >= 10 && num <= 12) {
//     alert('4-kvartal')
// } else {
//     alert("Bu ko'rinishdagi kvartal mavjud emas!!!")
// }

// ! Hour 

// let s = prompt("Soniyalarni kiriting!")
// let m = s / 60
// let h = s / 60
//     // let u = alert(`${Math.floor(m)} minut`)
// let u = alert(`${Math.floor(h)} soat`)

// ! Yoshingizni kiriting

// let login = prompt("login kiriting!");
// let lq = prompt("loginni qayta kiriting!")
// let parol = prompt("Parol kiriting!");
// let pq = prompt("Parolni qayta kiriting!")
// if (login === lq && parol === pq) {
//     alert("Hush kelibsiz!")
// } else {
//     alert("Login yoki parol xato kiritilgan!!!")
// }

// ! abc o'zgaruvchilarda son qabul qiling va bu sonlar to'gri kiritilsa consolda true qiymat qaytsin.

// let a = +prompt('Son kiriting!'),
//     b = +prompt("Birinchi kiritilgan sondan katta bo'lsin!"),
//     c = +prompt("Ikkinchi kiritilgan sondan katta bo'lsin!");

// if (a < b) {
//     if (b < c) {
//         alert(`${a},${b},${c} juda ham yaxshi sonlar ketma- ket kiritilgan.`)
//     } else if (b > c) {
//         alert(`Ikkinchi son katta uchinchi sondan! \n${a},${b},${c}`)
//         console.log(a, b, c)
//     } else if (a > c) {
//         alert(`Birinchi son katta uchinchi sondan! \n${a},${b},${c}`)
//         console.log(a, b, c)
//     }
// } else if (a > b) {
//     alert(`Birinchi son katta ikkinchi sondan! \n${a},${b},${c}`)
//     console.log(a, b, c)
// } else {
//     alert(`Son kitilmagan!!! Qayta harakat qiling. \n${a},${b},${c}`)
//     console.log(a, b, c)
// }

// ?  a b c o'garuvchilarda son qabul qiling agar bular o'sish tartibida bo'lsa shu sonlarni kvadartini yoki boshqa holotda kelsa kubini chiqarib qo'ying.

// let a = +prompt('Son kiriting!'),
//     b = +prompt("Birinchi kiritilgan sondan katta bo'lsin!"),
//     c = +prompt("Ikkinchi kiritilgan sondan katta bo'lsin!");

// if (a < b) {
//     if (b < c) {
//         alert(`${a},${b},${c} juda ham yaxshi sonlar ketma- ket kiritilgan. \nSonlarning kvadrati => ${a**2},${b**2},${c**2}`)
//     } else if (b > c) {
//         alert(`${a},${b},${c} Sonlarning kubinchi darajasi! => \n${a**3},${b**3},${c**3}`)
//         console.log(a, b, c)
//     } else if (a > c) {
//         alert(`${a},${b},${c} Sonlarning kubinchi darajasi! => \n${a**3},${b**3},${c**3}`)
//         console.log(a, b, c)
//     }
// } else if (a > b) {
//     alert(`${a},${b},${c} Sonlarning kubinchi darajasi! => \n${a**3},${b**3},${c**3}`)
//     console.log(a, b, c)
// } else {
//     alert(`Son kitilmagan!!! Qayta harakat qiling. \n${a},${b},${c}`)
//     console.log(a, b, c)
// }

// Todo: mantiqiy amallarga oid masalalar if / else => Qudrat Abdurahimov

// ! 4-masala 

// let a = prompt("A sonini kiriting:")
// let b = prompt("B sonini kiriting")

// if (a > 2 && b <= 3) {
//     console.log(`True \n${a} > 2 va ${b} <= 3`)
// } else {
//     console.log(`False \n${a} > 2 va ${b} <= 3`)
// }

// ! 5 - masala

// let a = prompt("A sonini kiriting:")
// let b = prompt("B sonini kiriting")

// if (a >= 0 && b < -2) {
//     console.log(`True \n${a} >= 0 va ${b} < -2`);
// } else {
//     console.log(`False \n${a} >= 0 va ${b} < -2`)
// }

// ! 6 -masala

// let a = prompt("A sonini kiriting:")
// let b = prompt("B sonini kiriting:")
// let c = prompt("C sonini kiriting:")

// if (a <= b && b <= c) {
//     alert(true)
// } else {
//     alert(false)
// }

// * abc sonlari berilsin va bularning eng kichigin consolga chiqarilsin
let a = prompt('Son kiriting:'),
    b = prompt('Son kiriting:'),
    c = prompt('Son kiriting:')

if (a < b && b < c && a < c) {
    alert(`${a},${b},${c}`)
} else if (a < b && b < c && a < c) {
    alert(`${a},${b},${c}`)
}