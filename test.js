import fetch from 'node-fetch';

const url = "https://www.nseindia.com/api/master-quote";

(async () => {
    const response = await fetch(url, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36",
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "en-US,en;q=0.9",
            "Referer": "https://www.nseindia.com/"
        }
    });

    if (!response.ok) {
        console.error("Failed to fetch:", response.status, response.statusText);
        return;
    }

    const data = await response.json();
    console.log(data);
})();
