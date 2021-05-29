import ProductRow from '../../../PrimaryComponents/ProductRow/ProductRow'

const ComputerProducts = (props) => {
    return (
        <div className="section-gap-top">
            <ProductRow title={ 'Laptop & Desktop'} imgPath={ 'assets/images/ProductSections/headings/computer_row_banner.png'}/>
        </div>
     );
}
 
export default ComputerProducts;