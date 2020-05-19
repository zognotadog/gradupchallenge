import React from 'react';
import logo from './logo.svg';
import './Mentors.css';
import { CardGrid, CardHeaderFull, CardRow, CardFooter } from "./Components/Cards.js";
import Bootstrap from 'react'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import StarRatings from 'react-star-ratings';
import useState from 'react';
import Modal from 'react-bootstrap/Modal'


// function MentorCard(props) {
//   return (
//     <Card style={{height: 200}}>
//     <div className="mentorCard">
//       <div className="photoArea">
//          <Image src="" roundedCircle />
//       </div>
//       <div className="detailsArea">
//         <h4>{props.name}</h4>
//         <h5>{props.job}</h5>
//         <span>{props.description}</span>
//       </div>
//       <div className="priceArea">
//         <div className="priceAreaCost">
//           <h4>£{props.price}</h4>
//           <t> per week</t>
//         </div>
//          <Button variant="primary" style={{background: "#796efe"}}block>Apply for mentorship</Button>
        
//       </div>
//     </div>
      
//     </Card>
//   );
// }

function MentorCard(props) {
  return (
    <Card>
    <div className="mentorCard">
      <div className="photoArea">
        <div className="imageArea">
          <Image src={props.photo} roundedCircle fluid/>
        </div>
        <div className="ratingArea">
          <StarRatings
            rating={props.rating}
            starDimension="20px"
            starSpacing="10px"
            starRatedColor="#796efe"
          />
          <div className="locationArea"><img src={require('./images/location-pin.png')}/> {props.location}</div>
        </div>
         
      </div>
      <div className="detailsArea">
        <div className="title">{props.name}</div>
        <div className="subtitle">{props.job}</div>
        <div className="text">{props.description}</div>
      </div>
      <div className="priceArea">
        <div className="priceAreaCost">
          <h4>£{props.price}</h4>
          <t> per week</t>
        </div>
         <Button variant="primary" style={{background: "#796efe"}}block>View Profile</Button>
        
      </div>
    </div>
      
    </Card>
  );
}


function MentorGrid(props){
  return (
    <>
    <CardGrid>
      {mentors.map((card, i) => {       
          return (
          <MentorCard id={i} {...card}/>
          ) 
        })}
    </CardGrid>
    </>
  );
}
function createMentorData(name, photo, job, location, description, price, rating) {
  return { name, photo, job, location, description, price, rating};
}
const mentors = [
  createMentorData('Alex Asher', "https://media-exp1.licdn.com/dms/image/C5603AQGHx-lyeTkEdQ/profile-displayphoto-shrink_400_400/0?e=1595462400&v=beta&t=xObueCOI7e-4xjY58Am_JSdIQvdFYXdlZotLT-P7w-8", "Genius at Home.com", "Bristol, UK", "Hello! I have been working in software development professionally and casually for a number of years now. My expertise lie in app and web development. I also bring a strong entreprenurial, innovative mindset to all challenges I face to overcome barriers and provide new, meaningful products.", 20, 4.6),
  createMentorData('Jack Larkins', "https://media-exp1.licdn.com/dms/image/C4D03AQE7BhM4yQ8eKQ/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=nmiJeFLlftM43Xg0aknPIYbaosyT7hwmlfyPco6xpr0", "Founder at Gradup", "London, UK", "We help University students connect to mentors one step ahead of them to secure their desired role. It's a win win for everyone. Graduates and young professionals attain affordable and effective 1-1 assistance which will help them use their time most in the most optimal way to secure their desired role. Mentors have the opportunity to give back and develop their leadership skills through 1-1 mentoring. ", 25, 4.7),
  createMentorData('Geoff Ranger', "https://www.biography.com/.image/t_share/MTE5NDg0MDYwNjkzMjY3OTgz/terry-crews-headshot-600x600jpg.jpg", "Unemployed", "Brooklyn, NY", "Hi! I've been unemployed now for about 6 years. I did have a job but I decided it wasnt for me so now I just stay at home. I probably wont be much use as a mentor to you; therefore, I would recommend using someone else.", 5, 2.3),
];
export default function Mentors(){
  const mentors = {}
  return (
    <main>
    <MentorGrid></MentorGrid>
    </main>
  );
};
