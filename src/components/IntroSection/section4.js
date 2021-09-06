import React from 'react'
import './section4.css'
import item1 from '../images/items/sec4-item.png'
import item2 from '../images/items/sec4-item2.png'
import item3 from '../images/items/sec4-item3.png'



const  Section45 = () => {
    return (
        <div>
            <div className="intro-background-3">
                <div className="intro3-title-wrapper">
                    <div className="intro3-title">
                        <p className="intro3-header">HAPPENED'S ISSUE</p>
                        <p className="intro3-para">Something in korean...</p>
                    </div>    
                </div>
                <div className="more-cards">
                        <button className="more-btn">SEE MORE</button>
                </div>
                <div className="intro-bestPrd">
                    <div className="card-items-wrapper">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={item1} alt="First slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={item2} alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={item3} alt="Third slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={item2} alt="Third slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={item1} alt="Third slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={item3} alt="Third slide"/>
                            </div>
                            
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section45