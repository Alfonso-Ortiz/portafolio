import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : "Pokedex.jpeg",
        disc : "Pokedex!",
        link: <a href="https://pokedex-ac.netlify.app/" target="_blank" rel='noopener noreferrer'>demo</a>
    },
    {
        img : "RickandMorty.jpeg",
        disc : "Rick and Morty!",
        link: <a href="https://rick-and-morty0.netlify.app" target="_blank" rel='noopener noreferrer'>demo</a>
    },
    {
        img : "AcademloBank.jpg",
        disc : "Academlo Bank!",
        link: <a href="https://academlo-bank.netlify.app" target="_blank" rel='noopener noreferrer'>demo</a>
    },
    {
        className: "weather",
        img : "weatherApp.jpeg",
        disc : "Weather App!",
        link: <a href="https://weatherappac.netlify.app" target="_blank" rel='noopener noreferrer'>demo</a>
    },
    {
        img : "BienesRaices.jpeg",
        disc : "Bienes raices!",
        link: <a href="/" target="_blank" rel='noopener noreferrer'>demo</a>
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2.3rem;
    height: 2.3rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #ff5000;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }

  .weather {
    height: 200px;
  }
`