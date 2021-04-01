async function visit() {
    const data = await fetch('https://api.countapi.xyz/update/afthab/cool/?amount=1')
    const res = await data.json()
    console.log(res)

}
visit()