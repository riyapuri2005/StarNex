function addJS(URL){
    const existingScriptObj = document.querySelector("script[src='"+URL+"']")
    if (!existingScriptObj)
    {
        const scriptObj = document.createElement('script')
        scriptObj.src = URL
        document.head.appendChild(scriptObj); console.log("Added JS ", URL);
    }
}

export default addJS;