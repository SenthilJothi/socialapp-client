import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

import Scream from "../components/Scream";

export class home extends Component {
  state = {
    screams: null
  };
  componentDidMount() {
    axios
      .get("/screams")
      .then(response => {
        this.setState({
          screams: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let recentScreamsMarkup = this.state.screams ? (
      this.state.screams.map(data => <Scream scream={data} />)
    ) : (
      <p> Loading... </p>
    );
    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <p> Profile... </p>
        </Grid>
      </Grid>
    );
  }
}

export default home;
