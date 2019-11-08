import MainLayout from '../layouts/MainLayout';
import React, { useState } from 'react';

const HomePage = () => {

    const [behind] = useState('../static/images/background-index.jpg')
    return (
        <div>
            <MainLayout>
            </MainLayout>

            <div className='flexbg'>
                <div className="layoutBackground">
                    <img src={behind} className="behindground"></img>
                </div>
            </div>
            <div className='search'>
                <input className='text-search' type="text" placeholder="Search.." >
                </input>
                <button className="box1" type="submit">Search</button>
            </div>
            <div className="introduct">
                <div className="boxL-introduct">
                    <h1>Storage</h1>
                    <h3>Keep your product data <br></br> into the database</h3>
                </div>
                <div className="boxR-introduct">
                    <h1>Accessible</h1>
                    <h3>The product Information <br></br> can be easily <br></br> accessed by anynoe</h3>
                </div>
            </div>
            <div className='flexHOT' >
                <div className='Box_hotpro'>
                    <span className="orangeText">Hot</span> <span className="blackText" Product>Product</span>
                </div>
            </div>

            <style jsx global>{`
                @font-face{
                    font-family: Roboto;
                    src: url(/static/fonts/Roboto-Regular.ttf);
                    font-weight: 400;
                }
                body {
                    margin: 0; 
                    font-family: 'Roboto'
                }
           `}</style>
            <style jsx>{`
            .flexbg{
               // margin-top:3px;
            }
            .layoutBackground{
                display: flex;
                flex-direction:column;
                justify-content: flex-end;
                align-items:center;
                width:100%;
            }
            .search {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    height: 50px;
                    background-color:white;
                }
            .behindground{
                background-size:auto;
                width:100%;
            }
            input[type=text] {
                    width: 500px;
                    box-sizing: border-box;
                    border: 2px solid #ccc;
                    border-radius: 4px;
                    font-size: 16px;
                    background-color: white;
                    background-image: url('/static/images/search-icon-hi.png');
                    background-position: 10px 10px; 
                    background-repeat: no-repeat;
                    padding: 12px 20px 12px 50px;
                    -webkit-transition: width 0.4s ease-in-out;
                    transition: width 0.4s ease-in-out;
                    border-radius: 25px;
                  }
            .introduct {
                    display: flex;
                    justify-content: center;
                    margin-top: 50px;
                    height:200px;
                    //background: gray;
                }
            .boxL-introduct {
                      width:300px;
                      height:150px;
                      background:white;
                      color:black;
                      border-right: 1px solid black;
                      text-align: center;
                      
                }
            .boxR-introduct {
                  width:300px;
                  height:150px;
                  background:white;
                  color:black;
                 // border-left: 1px solid black;
                  text-align: center;
              }
            h3 {
                  opacity: 0.7;
              }
            .search {
                display: flex;
                justify-content: center;
                width: 100%;
                height: 50px;
                margin-top:10px;
                background-color:white;
            }
            .box1 {
                width: 120px;
                height: 50px;
                line-height: 50px; 
                background: white;
                color: white;
                background-color: Aqua ;
                border: 1px solid #CCD1D9;
                text-align: center; 
                margin-left: 35px;
                font-size: 25px;
                border-radius: 25px;
              }
              .text-search {
                border: 2px solid white;
                box-shadow: rgba(0,0,0,0.3) 0px 1px 2px;
                width: 500px;
    
              }
              .icon-search {
                padding: 10px;
                background: dodgerblue;
                color: white;
                min-width: 35px;
                text-align: center;
                background:url('/static/images/search-515.png') no-repeat;
              }
              .flexHOT{
                    display: flex;
                    justify-content: center;
                    align-items: center;
              }
              .Box_hotpro{
                width: 70%;
                    line-height: 60px; 
                    color: black;
                    font-size: 20px;
                    border-top: 1px solid black;
                    text-indent: 20px;
                    align-self: flex-start;
              }
              .orangeText{
                font-size:25px;
                color:orange;
                font-weight:bold;
              }
              .blackText{
                font-size:25px;
                color:black;
                font-weight:bold;
              }
            `}</style>
        </div>

    )
}
export default HomePage;