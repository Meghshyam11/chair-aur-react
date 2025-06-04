import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchCurrency() {
            try {
                const res = await fetch(
                    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
                );
                const result = await res.json();
                setData(result[currency] || {});
            } catch (error) {
                console.error("Failed to fetch currency data:", error);
                setData({});
            }
        }

        fetchCurrency();
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
