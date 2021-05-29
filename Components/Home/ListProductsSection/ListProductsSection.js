import ListCard from '../../../PrimaryComponents/ProductCards/ListCard/ListCard'
const ListProductsSection = (porps) => {
    return (
        <div className="">

                    <div className="d-flex col-12">
                        <ListCard title={ 'Headphones'}/>
                        <ListCard title={ 'Top Selling Products'}/>
                        <ListCard title={ 'On Sale Products'}/>
                        <ListCard title={ 'Headphones'}/>
                    </div>
                </div>
     );
}

export default ListProductsSection;