import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(){
    super()
    this.state={
        curr:0
    }
  }
  increase=()=>{
    if(this.state.curr == images.length -1){
        this.setState({
            curr:0
        })
    }else{
        this.setState({
            curr:this.state.curr+1
        })
    }
  }

  decrease=()=>{
    if(this.state.curr == 0){
        this.setState({
            curr:images.length-1
        })
    }
    else{
        this.setState({
            curr: this.state.curr - 1
        })
    }
    }
  render(){
    return <>
    <h1>Carousel</h1>
    <div className="carousel-container flex">
        <div className="leftArrow arrowDiv flex" onClick={this.decrease}>
            <ArrowBackIosIcon />
        </div>

        <h2 className="title">{images[this.state.curr].title}</h2>
        <img src={images[this.state.curr].img} alt="image" />
        <h4 className="caption">{images[this.state.curr].subtitle}</h4>

        <div className="rightArrow arrowDiv flex" onClick={this.increase}>
            <ArrowForwardIosIcon />
            
        </div>
    </div>
    </>
  }
}

export default Carousel;