import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const Dashboard=()=>(
	<ul className="Dashboard">
	<li className="link li1"><Link to="/about" style={{ textDecoration: 'none' }}>About us</Link></li>
	<li className="link"><Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link></li>
	<li className="link"><Link to="/message" style={{ textDecoration: 'none' }}>Message</Link></li>
	</ul>
)

const About=()=>(
	<div className="aboutdiv">
	<h2>About Us</h2>
	<p>
	This page describes setting up a single-page application with everything you need
	for a comfortable development workflow, including linting, testing, production optimizations,
	 and more. Full-featured tools like these require some time and disk space to install.</p>
	 <h2>Team</h2>
	 <p>A team is a group of individuals working together to achieve a goal.

A group does not necessarily constitute a team. Teams normally have members with complementary
skills and generate synergy through a coordinated effort which allows each member to maximize their
strengths and minimize their weaknesses. Naresh Jain (2009) claims:

Team members need to learn how to help one another, help other team members realize their true
 potential, and create an environment that allows everyone to go beyond his or her limitations.
 Teams can be broken down into from a huge team or one big group of people,
 even if these smaller secondary teams are temporary</p>

	</div>
)

const Contact=()=>(
	<div className="contactdiv">
	<h2>Contact detail</h2>
	<h4>Address-</h4>d2-104,vikra
	<p>Noida,Uttarpradesh</p>
	< p><h4>Contact no-</h4>9457063543</p>
	<p>	<h4>Email-</h4>sau838452@gmail.com</p>
	</div>
)

const Message1=()=>(
	<div className="messages">
	<p>hey you are on message 1</p>
	<p>this is  no one in words </p>
	</div>
)
const Message2=()=>(
	<div className="messages">
	<p>hey you are on message 2</p>
	<p>this is  no two </p>
	</div>
)
const Message3=()=>(
	<div className="messages">
	<p>hey you are on message 3</p>
	<p>this is  no three </p>
	</div>
)
const Message4=()=>(
	<div className="messages">
	<p>hey you are on message 4</p>
	<p>this is  no fourrr</p>
	</div>
)
const Message=()=>(
	<ul className="messageul">
	<li className="messageli "><h2>Message are here</h2></li>
	<li className="messageli "><Link to="/message/Message1" style={{ textDecoration: 'none' }}>Message1</Link></li>
	<li className="messageli "><Link to="/message/Message2" style={{ textDecoration: 'none' }}>Message2</Link></li>
	<li className="messageli "><Link to="/message/Message3" style={{ textDecoration: 'none' }}>Message3</Link></li>
	<li className="messageli "><Link to="/message/Message4" style={{ textDecoration: 'none' }}>Message4</Link></li>
	 </ul>
)
const routes=(
	<BrowserRouter>
	<div>
	<Route path="/" component={Dashboard}/>
	<div>
<Route path="/about" component={About}/>
<Route path="/contact" component={Contact}/>
<Route path="/message" component={Message}/>
<Route path="/message/message1" component={Message1}/>
<Route path="/message/message2" component={Message2}/>
<Route path="/message/message3" component={Message3}/>
<Route path="/message/message4" component={Message4}/>
</div>
</div>
	</BrowserRouter>
);

ReactDOM.render(routes,document.getElementById('root'));
