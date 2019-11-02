import MainLayout from '../layouts/MainLayout';

const ProductPage = () => {
    return (
        <MainLayout>
            <div className="container-product-1">
                <div className="box-product1">
                    <span className="orangeText">Hot</span> <span className="blackText" Product>Product</span>
                </div>
            </div>

            <div className="container-product-2">
                <div className="box-product2">2</div>
                <div className="box-product3" >3</div>
                <div className="box-product4" >4</div>
            </div>
            <style JSX>{`
                    .container-product-1 {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        //background: #37BC9B;
                        //height: 200px;
                      }
                      .container-product-2 {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        //background: #37BC9B;
                        //height: 200px;
                      }
                      
                      .box-product1 {
                        width: 70%;
                        line-height: 60px; 
                        //background: #434A54;
                        color: black;
                        font-size: 20px;
                        border-top: 1px solid black;
                        text-indent: 20px;
                        align-self: flex-start;
                        
                      }
                      .box-product2 {
                        width: 250px;
                        height: 200px;
                        line-height: 50px; 
                        background: #434A54;
                        color: #F5F7FA;
                        border: 1px solid #CCD1D9;
                        text-align: center; 
                        align-content: flex-start;
                        margin: 70px 100px;
                      }
                      .box-product3 {
                        width: 250px;
                        height: 200px;
                        line-height: 50px; 
                        background: #434A54;
                        color: #F5F7FA;
                        border: 1px solid #CCD1D9;
                        text-align: center; 
                        margin: 70px 100px;
                      }
                      .box-product4 {
                        width: 250px;
                        height: 200px;
                        line-height: 50px; 
                        background: #434A54;
                        color: #F5F7FA;
                        border: 1px solid #CCD1D9;
                        text-align: center; 
                        margin: 70px 100px;
                      }
                      .orangeText  {
                        color:orange;
                        font-weight:bold;
                        }
                      .blackText    {
                        color:black;
                        font-weight:bold;
                        }
                `}
            </style>
        </MainLayout>

    )
}
export default ProductPage;