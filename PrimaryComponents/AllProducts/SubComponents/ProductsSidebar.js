const ProductsSidebar = (props) => {
    return (
        <div className="col-md-4 col-xl-3 d-none d-md-block chilldren-gap-top">
            {/* Category starts here */}
            <div className="sidebar_list_wrapper col mb-4">
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
            <div className="sidebar_list_wrapper col mb-4">
                <h5 className='sidebar_headings'>price</h5>
                <input type="range" name="" id="" max='5000' min='100' />
                </div>
            <div className="sidebar_list_wrapper col mb-4 scroll-list">
                <h5 className='sidebar_headings'>brand</h5>
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
            <div className="sidebar_list_wrapper col mb-4 scroll-list">
                <h5 className='sidebar_headings'>color</h5>
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
        </div>
     );
}
 
export default ProductsSidebar;