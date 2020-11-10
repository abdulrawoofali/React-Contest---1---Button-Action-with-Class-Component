import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { visible: false };
	}

	handleClick = () => {
		console.log("handling click.....");
		this.setState({ visible: !this.state.visible });
	};

	render() {
		return (
			<div id="main">
				{this.state.visible ? (
					<p id="para">
						Hello, I've learnt to use the full-stack evaluation tool. This makes
						me so happy
					</p>
				) : null}
				<button id="click" onClick={this.handleClick}>
					show
				</button>
			</div>
		);
	}
}

export default App;
