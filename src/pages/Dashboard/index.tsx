import React from "react";
import { Card, CardContent, Typography, CircularProgress } from "@mui/material";
import useWebSocket from "../../hooks/WebSocket";

const Dashboard: React.FC = () => {
    const sensorData = useWebSocket("ws://192.168.1.100:81");
    // const sensorData = {
    //     temperature: 36.2,
    //     humidity: 58,
    // }

    return (
        <div style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            gap: "20px",
            background: "linear-gradient(to bottom, #f0f4f8, #d9e2ec)",
            }}>
            <Typography variant="h4" gutterBottom>
                Monitoramento de Sensores
            </Typography>

            <div style={{ display: "flex", gap: "20px" }}>
                <Card sx={{ minWidth: 250, textAlign: "center", padding: 2 }}>
                    <CardContent>
                        <Typography variant="h6">Temperatura</Typography>
                        {sensorData ? (
                            <Typography variant="h4" color="primary">{sensorData.temperature.toFixed(1)}°C</Typography>
                        ) : (
                            <CircularProgress />
                        )}
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 250, textAlign: "center", padding: 2 }}>
                    <CardContent>
                        <Typography variant="h6">Umidade</Typography>
                        {sensorData ? (
                            <Typography variant="h4" color="secondary">{sensorData.humidity.toFixed(1)}%</Typography>
                        ) : (
                            <CircularProgress />
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
