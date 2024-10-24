function addJS(URL){
    
    const script = document.createElement('script')
    script.src = URL
    const existingLink = document.querySelector("script[src='"+URL+"']")
    if (!existingLink) { document.head.appendChild(script); console.log("Added JS ", URL); }
}

export default addJS;