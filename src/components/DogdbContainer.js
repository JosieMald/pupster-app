import React, { Component } from "react";
import API from "../utils/API";

class DogdbContainer extends Component {
state = {
    result: {},
    search: ""
};
componentDidMount() {
    API.getDogs()
    .then(res => {this.setState({ result: res.data });
    console.log(res)})
    .catch(err => console.log(err));
}

render () {
return (
<div>
    <p>Puppers are here!!!</p>
</div>
);
}
}

export default DogdbContainer;