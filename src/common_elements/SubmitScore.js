import Cookies from "js-cookie";

const submitScore = async (newScore) => {
    try {
        await fetch('http://localhost:5000/submitscore', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Bearer": Cookies.get('BEARER')
            },
            body: JSON.stringify({"SCORE":newScore}),
        });

    } catch (error) {
        console.error('Error:', error);
        return {};
    }
}

export default submitScore;