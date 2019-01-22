import React, { Component } from "react"
import Navbar from "../../components/Navbar"
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
											<Form.Label>City</Form.Label>
												<Form.Control 
														as="select"
														onChange={this.handleChange}
														value={this.state.search}
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
									Search
									</Button>
						</Card.Body>
				</Card>
				<Card className="results">
					<Card.Header className="concertHeader">Upcoming Shows</Card.Header>
					<img alt="credit" src={credit} className="img-fluid" />
					<ConcertResults results={this.state.results} />
				</Card>
			</div>
		)
	}
}

export default Concerts