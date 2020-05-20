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
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
  return (
    <>
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
         <Button variant="primary" style={{background: "#796efe"}} onClick={showModal} block>View Profile</Button>
        
      </div>
    </div>
      
    </Card>

    <Modal show={isOpen} dialogClassName="modal-styling" onHide={hideModal} >
      <ProfileModal {...props}/>
    </Modal>

    </>
  );
  }

function ProfileModal(user){
  const skills = user.skills
  return(
    <>
      <div className="modal-header">
        <div className="imageArea">
          <Image src={user.photo} roundedCircle fluid/>
        </div> 
        <div className="name">
          <div className="title">{user.name}</div>
          <div className="subtitle">{user.job}</div>
          <StarRatings
            rating={user.rating}
            starDimension="20px"
            starSpacing="10px"
            starRatedColor="#796efe"
          />
        </div>
        <div className="location"><img src={require('./images/location-pin.png')}/>{user.location}</div>
        <div className="price">
          <h4>£10</h4>
          <t>per week</t>
          <div className="priceButton">
            <Button variant="primary" style={{background: "#796efe"}} block>Apply for Mentorship</Button>
          </div>
        </div>
      </div>
      <div className="modal-body">
      <h3>About Me</h3>
      {user.detailDesc}
      <hr></hr>
      <h3>Skills & Tools</h3>
      <div className="skills">
          {skills.map((skill, i) => (
            <div className="skillChip">{skill}</div>
          ))}
      </div>
      
    <hr></hr>
    <h3>Reviews</h3>
    <Card>
      <Card.Title> Helped me get my first job!</Card.Title>
      <p>I found this mentor incredibly helpful. They showed me new wasy to sell myself to potential employers. I would highly reccommend the platform as it saved me lots of money. </p>
    </Card>
    <Card>
      <Card.Title>Exactly what I was looking for</Card.Title>
      <p>My mentor did a great job on data analysis and came up with a number of insights very relevant to our business. Thanks to his research, our company is now armed with better business practices. The collaboration was smooth and pleasant. I recommend Andrey as smart, diligent and proactive researcher.</p>
    </Card>
    <Card>
      <Card.Title>Outstanding Job</Card.Title>
      <p>Thanks mentor for an outstanding job! I appreciated your engagement on the last mile and the energy you put into the succesful completion. Your skills, coaching and detailled reports were highly useful and I am looking forward to engage you again.</p>
    </Card>
    </div>

    </>
  );
}



function MentorGrid(props){
  return (
    <>
    <div className="card-area">
    <CardGrid>
      {mentors.map((card, i) => {       
          return (
          <MentorCard id={i} {...card}/>
          ) 
        })}
    </CardGrid>
    </div>
    </>
  );
}
function createMentorData(name, photo, job, location, description, price, rating, skills, detailDesc) {
  return { name, photo, job, location, description, price, rating, skills, detailDesc};
}
const mentors = [
  createMentorData('Alex Asher', "https://media-exp1.licdn.com/dms/image/C5603AQGHx-lyeTkEdQ/profile-displayphoto-shrink_400_400/0?e=1595462400&v=beta&t=xObueCOI7e-4xjY58Am_JSdIQvdFYXdlZotLT-P7w-8", "Genius at Home.com", "Bristol, UK", "Hello! I have been working in software development professionally and casually for a number of years now. My expertise lie in app and web development. I also bring a strong entreprenurial, innovative mindset to all challenges I face to overcome barriers and provide new, meaningful products.", 20, 4.6, ["Programming", "Designing", "Snowboarding", "Cycling", "Programming", "Designing", "Snowboarding", "Cycling", "Programming", "Designing"], "Hello! I have been working in software development professionally and casually for a number of years now. My expertise lie in app and web development. I also bring a strong entreprenurial, innovative mindset to all challenges I face to overcome barriers and provide new, meaningful products. Hello! I have been working in software development professionally and casually for a number of years now. My expertise lie in app and web development. I also bring a strong entreprenurial, innovative mindset to all challenges I face to overcome barriers and provide new, meaningful products. Hello! I have been working in software development professionally and casually for a number of years now. My expertise lie in app and web development. I also bring a strong entreprenurial, innovative mindset to all challenges I face to overcome barriers and provide new, meaningful products."),
  createMentorData('Jack Larkins', "https://media-exp1.licdn.com/dms/image/C4D03AQE7BhM4yQ8eKQ/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=nmiJeFLlftM43Xg0aknPIYbaosyT7hwmlfyPco6xpr0", "Founder at Gradup", "London, UK", "We help University students connect to mentors one step ahead of them to secure their desired role. It's a win win for everyone. Graduates and young professionals attain affordable and effective 1-1 assistance which will help them use their time most in the most optimal way to secure their desired role. Mentors have the opportunity to give back and develop their leadership skills through 1-1 mentoring. ", 25, 4.7, ["Surfing", "Gym", "Walkings", "Talking", "Reading", "Running"], "We help University students connect to mentors one step ahead of them to secure their desired role. It's a win win for everyone. Graduates and young professionals attain affordable and effective 1-1 assistance which will help them use their time most in the most optimal way to secure their desired role. Mentors have the opportunity to give back and develop their leadership skills through 1-1 mentoring. We help University students connect to mentors one step ahead of them to secure their desired role. It's a win win for everyone. Graduates and young professionals attain affordable and effective 1-1 assistance which will help them use their time most in the most optimal way to secure their desired role. Mentors have the opportunity to give back and develop their leadership skills through 1-1 mentoring. We help University students connect to mentors one step ahead of them to secure their desired role. It's a win win for everyone. Graduates and young professionals attain affordable and effective 1-1 assistance which will help them use their time most in the most optimal way to secure their desired role. Mentors have the opportunity to give back and develop their leadership skills through 1-1 mentoring. "),
  createMentorData('Geoff Ranger', "https://www.biography.com/.image/t_share/MTE5NDg0MDYwNjkzMjY3OTgz/terry-crews-headshot-600x600jpg.jpg", "Unemployed", "Brooklyn, NY", "Hi! I've been unemployed now for about 6 years. I did have a job but I decided it wasnt for me so now I just stay at home. I probably wont be much use as a mentor to you; therefore, I would recommend using someone else.", 5, 2.3, ["Surfing", "Gym", "Walkings"], "Hi! I've been unemployed now for about 6 years. I did have a job but I decided it wasnt for me so now I just stay at home. I probably wont be much use as a mentor to you; therefore, I would recommend using someone else. Hi! I've been unemployed now for about 6 years. I did have a job but I decided it wasnt for me so now I just stay at home. I probably wont be much use as a mentor to you; therefore, I would recommend using someone else. Hi! I've been unemployed now for about 6 years. I did have a job but I decided it wasnt for me so now I just stay at home. I probably wont be much use as a mentor to you; therefore, I would recommend using someone else."),
];


export default function Mentors(){
  const mentors = {}
  return (
    <main>
    <MentorGrid></MentorGrid>
    </main>
  );
};
