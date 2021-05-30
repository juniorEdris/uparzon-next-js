import ListCard from '../../../PrimaryComponents/ProductCards/ListCard/ListCard'
const ListProductsSection = (porps) => {
    return (
        <div className="section-gap-top">

                    <div className="d-flex flex-wrap col-12 p-0">
                        <ListCard title={ 'Headphones'} list/>
                        <ListCard title={ 'Top Selling Products'} list/>
                        <ListCard title={ 'On Sale Products'} list/>
                {/* <ListCard title={ 'Headphones'}/> */}
                <div className="col-md-3 col-12">
                    <img src="assets/images/banners/imageBanner.png" alt="" />    
                </div>
                    </div>
                </div>
     );
}

export default ListProductsSection;