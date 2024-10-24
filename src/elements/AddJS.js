function addJS(URL){
    const scriptObj = document.createElement('script')
    scriptObj.src = URL
    const existingScriptObj = document.querySelector("script[src='"+URL+"']")
    if (!existingScriptObj) { document.head.appendChild(scriptObj); console.log("Added JS ", URL); }
}

export default addJS;