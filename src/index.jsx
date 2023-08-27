import React from 'react';
import ReactDOM from 'react-dom';
import profileImg from './img/profile.jpg'
import animeImg from './img/anime.jpg'
import bikeImg from './img/bike.jpg'
import profileBikeImg from './img/profileBike.jpg'
import huzaifaImg from './img/huzaifa.jpg'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowRight, HandThumbsUp, ChatSquareText, Share } from 'react-bootstrap-icons';
import "./index.css"

function Post(props) {
  return (
    <div>
      <div className='card'>
        <header>
          <img src={props.profileImg} alt="" />
          <div className='head'>
            <h1>{props.name}</h1>
            <div className='date'> {props.date} </div>
          </div>
        </header>

        <hr />

        <p>{props.text} </p>

        <hr />

        <img src={bikeImg} alt="" />

        <footer>
          <button className='like-btn'> <HandThumbsUp />Like</button>
          <button className='comment-btn'> <ChatSquareText /> Comment</button>
          <button className='shere-btn'> <Share /> Share</button>
        </footer>
      </div>
      {/* ----------------------------------------------------------------------- */}
    </div>
  )
}

ReactDOM.render(
  <div>

    <Post
      profileImg={profileImg}
      name="Anas Khan"
      date="24-Aug-2023 07:00 pm"
      text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type 
       specimen book. It has survived not only five centuries, but also the leap into 
       electronic typesetting, remaining essentially unchanged. It was popularised in the 
       1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
       recently with desktop publishing software like Aldus PageMaker including versions of Lorem
        Ipsum"
    />

    <Post
      profileImg={animeImg}
      name="Anime"
      date="05-Marh-2023 02:45 am"
      postImg={animeImg}
      text="Contrary to popular belief, Lorem Ipsum is not simply random text.
       It has roots in a piece of classical Latin literature from 45 BC, making 
       it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
        College in Virginia, looked up one of the more obscure Latin words, consectetur, 
        from a Lorem Ipsum passage, and going through the cites of the word in classical
        literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
        1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil)
        by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
        during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit
        amet.., comes from a line in 
        section"
    />

    <Post
      profileImg={profileBikeImg}
      name="BIKE"
      date="05-Marh-2023 02:45 am"
      postImg={bikeImg}
      text="Contrary to popular belief, Lorem Ipsum is not simply random text.
       It has roots in a piece of classical Latin literature from 45 BC, making 
       it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
        College in Virginia, looked up one of the more obscure Latin words, consectetur, 
        from a Lorem Ipsum passage, and going through the cites of the word in classical
        literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
        1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil)
        by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
        during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit
        amet.., comes from a line in 
        section"
    />

    <Post
      profileImg={huzaifaImg}
      name="Huzaifa"
      date="20-jan-2022 10:02 pm"
      postImg={bikeImg}
      text="Contrary to popular belief, Lorem Ipsum is not simply random text.
       It has roots in a piece of classical Latin literature from 45 BC, making 
       it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
        Collegeum passage, and going through the cites of the word in classical
        literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
        1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil)
        by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
        during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit
        amet.., comes from a line in 
        section"
    />
  </div>,



  document.querySelector('#root'));