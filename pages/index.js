import MainLayout from '../layouts/MainLayout';

const HomePage = () => {
    return (
        <MainLayout>
            <div className="main">  
            <div className="box" >
                   stock 
                </div>
            
            </div>
            <style JSX>{`
                .main {
                    display: flex;
                    //background:LightGray;
                    hight:500px;
                    //width: 70%;
                    padding:  0  80px; 
                    
                    justify-content: center;
                }
                .in-main {
                    width:70%;
                    border-top: 1px solid black;
                    text-align: flex-start; 
                    align-self: center;
                }
                .box {
                    width: 70%;
                    height: 500px;
                    line-height: 50px; 
                    
                    color: OrangeRed ;
                    text-align: flex-start; 
                    border-top: 1px solid black;
                  }
            `}</style>
        </MainLayout>

    )
}
export default HomePage;