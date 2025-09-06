import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function InfoBox({ info }) {
  if (!info || Object.keys(info).length === 0) {
    return null;
  }

  const Sunny_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  const Snow_URL  ="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/74C8/production/_132269892_sevenoaks.jpg";

  const Hot_URL = "https://thfvnext.bing.com/th/id/OIP.AqCuThcLpi4JTRjOWQBA0gHaEK?w=326&h=183&c=7&r=0&o=7&cb=thfvnext&pid=1.7&rm=3&ucfimg=1";
  const VHot_URL = "https://images.unsplash.com/photo-1606804235532-4d09df380aea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN1bW1lciUyMGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"
  const Cloudy_URL = "https://images.unsplash.com/photo-1622336707998-fa47a2594145?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Rain_URL = "https://t4.ftcdn.net/jpg/01/63/96/63/360_F_163966311_qh3qSk57mw9oLPOklZigzX9zlB5DgdaM.jpg";
  const Fog_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZln9OeZ-W-xj5n3GcaKTJn3rbIfAIsFEehvd4SOKH4p6l9g4ely5ITxrSAkzTG5Ei4nU&usqp=CAU";
  const Thunderstorm_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMIOBOpsirYEkRHw2DIP8o1r44xi6gOq2nZUj7vWhm6Ns-nGhG0D26ACbL-v6NKD-A3co&usqp=CAU";

  let weatherImg = "";
  const temp = info.temp;
  const humidity = info.humidity;

  if(temp <= 0){
    weatherImg = Snow_URL;
  }else if(temp >0 && temp <= 15){
    if(humidity > 70){
      weatherImg = Fog_URL;
    }else{
      weatherImg = Cloudy_URL;
    }
  }else if(temp > 15 && temp <=25){
    if(humidity > 60){
      weatherImg = Rain_URL;
    }else{
      weatherImg = Sunny_URL;
    }
  }else if(temp > 25 && temp <= 35){
    if(humidity > 70){
      weatherImg = Thunderstorm_URL;
    }else{
      weatherImg = Hot_URL;
    }
  }else{
    weatherImg = VHot_URL;
  }
  console.log(weatherImg);
  return (
    <>
      <div className="info-box">
        <Card sx={{ maxWidth: 345, margin: "10px" }}>
          <CardContent>
            <CardMedia
              sx={{ height: 140 }}
              image={weatherImg}
              title="green iguana"
            />
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>
                The weather is {info.des} and feels like {info.feelsLike}
              </p>
            </Typography>
            <Typography component={"span"}>
              <p>Temperature : {info.temp}&deg;C</p>
              <p>Humidity : {info.humidity}</p>
              <p>Min Temperature : {info.tempMin}&deg;C</p>
              <p>Max Temperature : {info.tempMax}&deg;C</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
