async function lmao() {
    const res = await fetch('https://api.countapi.xyz/update/afthab/cool/?amount=1')
    const data = await res.json()
    document.getElementById("views").innerHTML = data.value

}
lmao()