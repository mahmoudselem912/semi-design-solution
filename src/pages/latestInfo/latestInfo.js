import React from "react";

import "./latest-info.css";
import logo1 from "../../assets/news1.jpeg";
import logo2 from "../../assets/news2.jpeg";
import logo3 from "../../assets/new3.jpeg";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const LatestInfo = () => {
  
  return (
    <div className="latestInfo-page">
      <h2 className="heading-news">LATEST INFO</h2>
      <p className="text-news">Our Latest News</p>

      <div className="news-content">
        <div className="small-news">
          <Card style={{ width: "345px" }}>
            <CardActionArea>
              <CardMedia
                image={logo1}
                title="Contemplative Reptile"
                style={{ height: "140px" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Title of the news
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Body of the news
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>

          <Card style={{ width: "345px", marginTop: "20px" }}>
            <CardActionArea>
              <CardMedia
                image={logo2}
                title="Contemplative Reptile"
                style={{ height: "140px" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Title of the news
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Body of the news
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>

        <Card>
          <CardActionArea>
            <CardMedia image={logo3} title="Contemplative Reptile" style={{height: "440px"}}/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Title of the most important news 
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Body of the most important news
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default LatestInfo;
