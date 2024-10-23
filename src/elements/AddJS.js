function addJS(URL){
    const script = document.createElement('script')
    script.src = URL
    const existingLink = document.querySelector("script[src='"+URL+"']")
    if (!existingLink) { document.head.appendChild(script); }
}

export default addJS;