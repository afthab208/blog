const progressBar = document.querySelector("#progressBar");
    let totalPageHeight = document.body.scrollHeight - window.innerHeight;
    window.onscroll = () => {
    let newProgressHeight = (window.pageYOffset / totalPageHeight) * 100;
    progressBar.style.height = `${newProgressHeight}%`;
    progressBar.style.opacity = `${newProgressHeight}%`;
    }

    async function visit() {
        const data = await fetch('https://api.countapi.xyz/update/afthab/cool/?amount=1')
        const res = await data.json()
        console.log(res)
    
    }
    visit()