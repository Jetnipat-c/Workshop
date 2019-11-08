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
               .logo-container {
                background-image: url('/static/images/stock.png');
                background-position: 20px 10px; 
                background-repeat: no-repeat;
                padding: 12px 20px 12px 50px;
               }
                .icon-stock {
                    background:url('/static/images/stock.png') no-repeat;   
                  }
                  h3 {
                    opacity: 0.7;
                }
           `}</style>
        </div>
    )
}
export default MainLayout;