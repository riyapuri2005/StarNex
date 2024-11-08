function addJS(URL){
    const existingLink = document.querySelector("script[src='"+URL+"']")
    if (existingLink) { existingLink.remove(); }
}

export default addJS;