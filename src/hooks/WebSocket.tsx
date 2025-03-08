import { useEffect, useState } from "react";

const useWebSocket = (url: string) => {
    const [data, setData] = useState<{ temperature: number; humidity: number } | null>(null);
    const [connected, setConnected] = useState<boolean>(false);

    useEffect(() => {
        const socket = new WebSocket(url);

        socket.onopen = () => {
            console.log("Conexão WebSocket estabelecida!");
            setConnected(true);
        };

        socket.onmessage = (event) => {
            try {
                const jsonData = JSON.parse(event.data);
                setData(jsonData);
            } catch (error) {
                console.error("Erro ao parsear JSON:", error);
            }
        };

        socket.onerror = (error) => {
            console.error("Erro no WebSocket:", error);
            setConnected(false);
        };

        socket.onclose = () => {
            console.warn("Conexão WebSocket fechada! Tentando reconectar...");
            setConnected(false);
            setTimeout(() => {
                useWebSocket(url); // Tenta reconectar após 5 segundos
            }, 5000);
        };

        return () => {
            socket.close();
        };
    }, [url]);

    return { data, connected };
};

export default useWebSocket;
