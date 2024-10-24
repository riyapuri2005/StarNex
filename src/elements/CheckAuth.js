import Cookies from "js-cookie";

const checkAuth = async (Bearer) => {
    try {
        const response = await fetch('http://localhost:5000/checkauth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Bearer": Bearer
            }
        });
        const result = await response.json();
        if (result["STATUS"] >= 0) {
            Cookies.set('BEARER', Bearer, {expires: 30});
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}

export default checkAuth;