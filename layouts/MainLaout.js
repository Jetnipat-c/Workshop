cont MainLayout = props => {
    return (
        <div className='container'>
            <div className='topbar'>
                <div className='logo-container'>
                    <Link href='/'>
                        <a className='link'>STOCK</a>
                    </Link>
                </div>
                <div className='menu-container'>
                    <div>
                        <Link href='/'>
                            <a className='link'>Product</a>
                        </Link>
                    </div>
                    <div>
                        <Link href='/'>
                            <a className='link'>Mangane</a>
                        </Link>
                    </div>
                    <div>
                        <Link href='/'>
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
                // flex-direction: row;
                   justify-content: space-between;
                   align-items: center;
                   height: 32px;
                   background-color: AliceBlue;
                   padding:  0  80px; 
               }
               .menu-container {
                   display: flex;
               }
               .menu-container div{
                   margin-left: 5px;
               }
               .link {
                text-decoration: none;
                color : black;
               }
           `}</style>

        </div> // JSX-HTML
    )
}