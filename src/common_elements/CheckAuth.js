import Cookies from "js-cookie";

const checkAuth = async () => {
    try {
        const response = await fetch('http://localhost:5000/checkauth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Bearer": Cookies.get('BEARER')
            }
        });
        const result = await response.json();
        if (result["STATUS"] >= 0) {
            Cookies.set('BEARER', Cookies.get('BEARER'), {expires: 7, path: '/' });
            return result;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

export default checkAuth;