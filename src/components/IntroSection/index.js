import React from 'react'
import sec1 from "../images/intro-section/intro-section-1.png"
import sec2 from "../images/intro-section/intro-section-2.png"
import hotPD1 from "../images/intro-section/hot-1.png"
import hotPD2 from "../images/intro-section/hot-2.png"
import hotPD3 from "../images/intro-section/hot-3.png"
import './index.css'


const Intro = () => {
    return (
        <div className="intro-wrap">
            <div className="intro-background">
                <img className="intro-img" src={sec1}></img>
                <div className="btn-wrap">
                    <button className="btn btn-primary intro-btn"><p className="p-text">LOREM IPSUM</p></button>
                    <div className="btn-passing"></div>
                    <button className="btn btn-primary intro-btn"><p className="p-text">LOREM IPSUM</p></button>
                </div>
            </div>
            <div className="intro-background-2">
                <img className="intro-img" src={sec2}></img>
            </div>
            <div className="intro-background-3">
                <div className="intro3-title">
                    <p className="intro3-header">BEST PRODUCT</p>
                    <p className="intro3-para">How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos Can be trimmed. Take the first</p>
                </div>
                <div className="intro-bestPrd">
                    <div className="card-items">
                        <div className="item-wrapper" to={'/details'}>
                            <img className="item-img" src={hotPD1}></img>
                            <div className="btn-wrapper">
                                <p className="btn-text">How to create mobile-optimized</p>
                                <button className="btn btn-primary item-btn">GO</button>
                            </div>
                        </div>
                        <div className="item-wrapper" to={'/details'}>
                            <img className="item-img" src={hotPD2}></img>
                            <div className="btn-wrapper">
                                <p className="btn-text">How to create mobile-optimized</p>
                                <button className="btn btn-primary item-btn">GO</button>
                            </div>
                        </div>
                        <div className="item-wrapper" to={'/details'}>
                            <img className="item-img" src={hotPD3}></img>
                            <div className="btn-wrapper">
                                <p className="btn-text">How to create mobile-optimized</p>
                                <button className="btn btn-primary item-btn">GO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Intro;