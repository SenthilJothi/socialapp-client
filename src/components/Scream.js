import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

//MUI Stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    display: "flex"
  }
};

export class Scream extends Component {
  render() {
    const { classes, scream } = this.props;
    return (
      <Card>
        <CardMedia image={scream.userImage} title="Profile image" />
        <CardContent>
          <Typography variant="h5">{scream.userHandle}</Typography>
          <Typography variant="body2" color="textSecondary">
            {scream.createdAt}
          </Typography>
          <Typography variant="body1">{scream.body}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Scream);
