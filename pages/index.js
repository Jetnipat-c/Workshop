import MainLayout from '../layouts/MainLayout';

const HomePage = () => {
    return (
        <MainLayout>
            <div className="main">
                
            </div>
            <style JSX>{`
                .main {
                    display: flex;
                    background:red;
                    //hight:100px;
                    //width: 70%;
                    //padding:  0  80px; 
                    justify-content: center;
                }
                .box1 {
                    width: 70%;
                    //height: 500px;
                    line-height: 50px; 
                    background:red;
                    color: OrangeRed ;
                    text-align: flex-start; 
                    padding-left: 30px;
                    border-top: 1px solid black;
                  }
            `}</style>
        </MainLayout>

    )
}
export default HomePage;