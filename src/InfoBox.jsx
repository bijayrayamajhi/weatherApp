import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function InfoBox({ info }) {
  let COLD_URL =
    "https://images.unsplash.com/photo-1640955289647-5bd70aab9b55?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let HOT_URL =
    "https://images.unsplash.com/photo-1546274527-9327167dc1f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let RAIN_URL =
    "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div>
      <h1>weather info</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? RAIN_URL : info.temp > 18 ? HOT_URL : COLD_URL
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>humidity: {info.humidity}</p>
            <p>temp: {info.temp}&deg;C</p>
            <p>temp_max: {info.temp_max}&deg;C</p>
            <p>temp_min: {info.temp_min}&deg;C</p>
            <p>weather: {info.weather}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
