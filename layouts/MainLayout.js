import Link from 'next/link';
const MainLayout = props => {
    return (
        <div className='container'>
            
            <div className='topbar'>
                <div className='logo-container'>
                
                    <Link href='/'>
                         <a className='link' >STOCK</a>   
                    </Link>
                    
                </div>
                <div className='menu-container'>
                    <div>
                        <Link href='/products'>
                            <a className='link'>Product</a>
                        </Link>
                    </div>
                    <div>
                        <Link href='/manage'>
                            <a className='link'>Mangane</a>
                        </Link>
                    </div>
                    <div>
                        <Link href='/profile'>
                            <a className='link'>Profile</a>
                        </Link>
                    </div>
                </div>

            </div>

            <div className='team'>

            </div>

            <div className='search'>
                <i className="icon-search"></i>
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

            <div className='content'>
                {props.children}
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
               .topbar {
                   display: flex;
                // flex-direction: row;
                   justify-content: space-between;
                   align-items: center;
                   height: 32px;
                   background-color: LightCyan   ;
                   padding:  0  80px; 
                   box-shadow: rgba(0,0,0,0.2) 0px 1px 2px;
               }
               .menu-container {
                   display: flex;
               }
               .menu-container div{
                   margin-left: 35px;
               }
               .link {
                text-decoration: none;
                color : black;
               }
               .team {
                //display: flex;
                // flex-direction: row;
                //align-items: center;
                //justify-content: center;
                //background-color: Beige   ;
                height: 600px;
                //   padding:  0  80px; 
                //box-shadow: rgba(0,0,0,0.2) 0px 1px 2px;
                //width:100%;
                //height:100%;
                position:center;
                background:url('/static/images/bg3.png'), no-repeat;
                background-size: cover;
                }
                .search {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    height: 50px;
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
                  .icon-stock {
                    background:url('/static/images/stock.png') no-repeat;   
                  }
                  .introduct {
                      display: flex;
                      justify-content: center;
                      margin-top: 50px;
                      height:200px       
                  }
                  .boxL-introduct {
                        width:300px;
                        height:170px;
                        background:white;
                        color:black;
                        border-right: 1px solid black;
                        text-align: center;
                  }
                  .boxR-introduct {
                    width:300px;
                    height:170px;
                    background:white;
                    color:black;
                    border-left: 1px solid black;
                    text-align: center;
              }
                  
                  h3 {
                    opacity: 0.7;
                  }
                
           `}</style>

        </div> // JSX-HTML
    )
}
export default MainLayout;