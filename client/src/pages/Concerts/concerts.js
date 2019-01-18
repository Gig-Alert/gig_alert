// The page for Bands in Town API concert Information... or SongKick

// I guess the idea would be to have someone search for concerts by city and state
// returns an object w/ venue name and whatever else you can find thats somewhat relevant
// restrict to only future concerts

// imports
import React, { Component } from "react"
import Navbar from "../../components/Navbar"
// import Wrapper from "../../components/Wrapper/wrapper"
// import axios from "axios"
import ConcertResults from "../../components/ConcertCard/concertResults"
import "./concerts.css"
import { Card, Button, Form, Col } from "react-bootstrap"
import API from "../../utils/API"
import credit from "../../Assets/img/songkick.png"

class Concerts extends Component {
	state = {
		search: "",
		results: [],
		error: ""
	}
	handleChange = e => {
		this.setState({ search: e.target.value })
	}
	handleSubmit = e => {
		e.preventDefault()
		API.findConcert(this.state.search)
				.then(res => {
					if (res.data.status === "error") {
					throw new Error(res.data.message)
					}
					this.setState({ results: res.data.resultsPage.results.event, error: ""})
					console.log(this.search)
					})
				.catch(err => this.setState({ error: err.message }))
			}
	render () {
		return (
			<div>
				<Navbar />
				<Card className="formConcerts">
					<Card.Header>Events</Card.Header>
						<Card.Body>
							<Card.Title>Concert Search</Card.Title>
								<Card.Text />
									<Form.Row>
										<Form.Group as={Col} controlId="formGridState">
											{/* We'll use metro_area_id */}
											<Form.Label>City</Form.Label>
												<Form.Control 
														as="select"
														onChange={this.handleChange}
														// city={this.state.city}
														>
													<option>Choose...</option>
													<option value="14700">Cleveland</option>
													<option value="9480">Columbus</option>
													<option value="22040">Cincinnati</option>
													<option value="9426">Chicago</option>
													<option value="18073">Detroit</option>
													<option value="22443">Pittsburgh</option>
												</Form.Control>
										</Form.Group>
									</Form.Row>
									<Button variant="primary" type="submit" onClick={this.handleSubmit}>
									Submit
									</Button>
						</Card.Body>
				</Card>
				<Card className="results">
					<Card.Body>Upcoming Shows</Card.Body>
					<img alt="credit" src={credit} className="img-fluid" />
					<ConcertResults results={this.state.results} />
				</Card>
			</div>
		)
	}
 }

//  // componentDidMount(){
//     //     axios.get("https://api.songkick.com/api/3.0/metro_areas/{metro_area_id}/calendar.json?apikey={your_api_key}")
//     //         .then(response => {
//     //             console.log(response)
//     //         })
//     //         .catch(error => console.log(error))
//     // }


//     //     axios.get("https://api.songkick.com/api/3.0/metro_areas/{metro_area_id}/calendar.json?apikey={your_api_key}")
//     //          .then(response => {
//     //              console.log(response)
//     //          })
//     //          .catch(error => console.log(error))

//             // axios.get("http://randomuser.me/api/?results=5")
//             //     .then(response => {
//             //         console.log(response)
//             //     })
//             //     .then(data => this.setState({ data }))
//             //     .catch(error => console.log(error))
   

// export default
export default Concerts