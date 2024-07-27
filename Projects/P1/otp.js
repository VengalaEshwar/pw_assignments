//otp generetor
const otp = () => {
    let n=Math.trunc(Math.random()*10000);
    if(n>999)
    return n
    return otp()
}
console.log(otp());