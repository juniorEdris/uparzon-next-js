const BreadCrumbs = (props) => {
    return (
        <div className="uparzon-breadcrumbs">
            <div className="uparzon-container-fluid">
                {/* <ul>
                    <li>
                        <Link href=''>
                            <a >home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href=''>
                            <a className='active'>shop</a>
                        </Link>
                    </li>
                </ul> */}
                <span>Home</span> <span>/</span> <span className='active'>Shop</span>
            </div>
        </div>
     );
}
 
export default BreadCrumbs;