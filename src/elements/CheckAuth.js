import Cookies from "js-cookie";

async function checkAuth(Bearer) {
    console.log(Bearer)
    try {
        const response = await fetch('http://localhost:5000/checkauth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const result = await response.json();
        if (result["STATUS"] >= 0) {
            console.log(Bearer)
            Cookies.set('BEARER', Bearer, {expires: 30});
            return true;
        } else {
            console.error('Auth Check Failed');
        }
    } catch (error) {
        console.error('Error:', error);
    }
    return false;
}

export default checkAuth;