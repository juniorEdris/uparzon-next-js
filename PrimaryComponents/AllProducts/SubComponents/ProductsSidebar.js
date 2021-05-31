const ProductsSidebar = (props) => {
    return (
        <div className="col-md-4 col-xl-3 d-none d-md-block chilldren-gap-top">
            {/* Category starts here */}
            {/* <div className="col pl-4 pr-4"> */}
            <div className="sidebar_list_wrapper col">
                <h5 className='sidebar_headings'>categories</h5>
                <ul className='sidebar_list'>
                    <li>
                        <a href="">clothing & apparel </a>
                    </li>
                    <li>
                        <a href="">garden & kitchen </a>
                    </li>
                    <li>
                        <a href="">consumer electrics </a>
                    </li>
                    <li>
                        <a href="">health & beauty </a>
                    </li>
                    <li>
                        <a href="">computers & technology </a>
                    </li>
                    <li>
                        <a href="">jwelerry & watches </a>
                    </li>
                    <li>
                        <a href="">phone & Accessories </a>
                    </li>
                </ul>
                </div>
            {/* </div> */}
        </div>
     );
}
 
export default ProductsSidebar;