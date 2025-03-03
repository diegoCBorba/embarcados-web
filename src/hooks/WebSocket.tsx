import { useEffect, useState } from "react";

const useWebSocket = (url: string) => {
    const [data, setData] = useState<{ temperature: number; humidity: number } | null>(null);

    useEffect(() => {
        const socket = new WebSocket(url);

        socket.onmessage = (event) => {
            try {
                const jsonData = JSON.parse(event.data);
                setData(jsonData);
            } catch (error) {
                console.error("Erro ao parsear JSON:", error);
            }
        };

        return () => socket.close();
    }, [url]);

    return data;
};

export default useWebSocket;
