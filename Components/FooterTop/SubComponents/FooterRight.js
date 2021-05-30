import Link from 'next/link';

export default function FooterRight() {
    return (
        <div className="col-md-6">
            <div className="row no-gutters">
            <div className="col-4">
                        <h5 className='footer_heading'>Quick Links</h5>
                        <ul className="footer_list">
                        <li>
                            <Link href=''>
                                <a >Policy</a>
                            </Link>
                         </li>
                        <li>
                            <Link href=''>
                                <a >Terms & Condition</a>
                            </Link>
                         </li>
                        <li>
                            <Link href=''>
                                <a >Shipping</a>
                            </Link>
                         </li>
                        <li>
                            <Link href=''>
                                <a >Returns</a>
                            </Link>
                         </li>
                        <li>
                            <Link href=''>
                                <a >FAQ's</a>
                            </Link>
                         </li>
                        </ul>
                </div>
                <div className="col-4">
                        <h5 className='footer_heading'>Information</h5>
                        <ul className="footer_list">
                        <li>
                            <Link href=''>
                                <a >About us</a>
                            </Link>
                         </li>
                        <li>
                            <Link href=''>
                                <a >delivery information</a>
                            </Link>
                         </li>
                        <li>
                            <Link href=''>
                                <a >privacy policy</a>
                            </Link>
                         </li>
                        <li>
                            <Link href=''>
                                <a >terms and conditions</a>
                            </Link>
                         </li>
                        <li>
                            <Link href=''>
                                <a >contact us</a>
                            </Link>
                         </li>
                        <li>
                            <Link href=''>
                                <a >returns</a>
                            </Link>
                         </li>
                        <li>
                            <Link href=''>
                                <a >site map</a>
                            </Link>
                         </li>
                        </ul>    
                </div>
                <div className="col-4">
                        <h5 className='footer_heading'>Customer Care</h5>
                        <ul className="footer_list">
                        <li>
                            <Link href=''>
                                <a >my account</a>
                            </Link>
                         </li>
                        <li>
                            <Link href=''>
                                <a >track your order</a>
                            </Link>
                         </li>
                        <li>
                            <Link href=''>
                                <a >customer service</a>
                            </Link>
                         </li>
                        <li>
                            <Link href=''>
                                <a >returns / exchange</a>
                            </Link>
                         </li>
                        <li>
                            <Link href=''>
                                <a >FAQ</a>
                            </Link>
                         </li>
                        <li>
                            <Link href=''>
                                <a >product support</a>
                            </Link>
                         </li>
                        </ul>
                </div> 
            </div>
        </div>
    )
}
