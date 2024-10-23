function addJS(URL){
    const existingLink = document.querySelector("script[src='"+URL+"']")
    if (!existingLink) { document.head.removeChild(existingLink); }
}

export default addJS;