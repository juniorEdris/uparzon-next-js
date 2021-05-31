import ShopProductCards from '../../ProductCards/Cards/ShopProductCards';

const ProductsBody = (props) => {
    return (
        <div className="col-12 col-md-8 col-xl-9 chilldren-gap-top">
             <div className="row no-gutters product_view align-items-center">
                    <div className="col-6">
                    <span className='text-light'>View</span>
                    <a href="">
                        <img src="assets/svg/icons/View Icons/01.svg" alt="" />
                    </a>
                    <a href="">
                        <img src="assets/svg/icons/View Icons/02.svg" alt="" />
                    </a>
                    <a href="">
                        <img src="assets/svg/icons/View Icons/03.svg" alt="" />
                    </a>
                    </div>
                    <div className="col-6">
                        {/* <select name="" id="">
                            <option value="">select one</option>
                    </select> */}
                    <select class="custom-select ">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    </div>
                </div>
            <div className="row chilldren-gap-top">
                {Array(24).fill().map(e => (
                    <div className="col-6 col-lg-4 col-xl-3 col-xxl-2 mb-4">
                        <ShopProductCards/>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default ProductsBody;