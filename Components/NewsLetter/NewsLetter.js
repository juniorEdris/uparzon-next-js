import Styles from '../../styles/Home.module.css';
const NewsLetter = (props) => {
  return (
    <div className={`${Styles.news_letter_wrapper} `}>
      <div className="uparzon-container-fluid">
        <div className="row align-items-center no-gutters pt-2 pb-2">
          <div
            className={`${Styles.news_letter_left} col-md-4 d-flex align-items-center justify-content-center justify-content-md-start mb-2 mb-sm-0`}>
            <img
              src={'/assets/svg/icons/paper-plane.svg'}
              className="mr-3"
              alt="news letter"
            />
            <h5 className="text-light p-0 m-0">Sign Up For News Letters</h5>
          </div>
          <div className="col-md-3 d-flex align-items-center justify-content-center mb-2 mb-sm-0">
            <small className="text-light">
              Be the First to Know. Sign up for newsletter today
            </small>
          </div>
          <div className="col-md-5 mb-2 mb-sm-0">
            <div
              className={`${Styles.news_letter_form} row no-gutters align-items-center m-auto col-11`}>
              <div className={`${Styles.news_letter_input} col-8`}>
                <input type="text" name="" placeholder="" />
              </div>
              <div className={`${Styles.news_letter_button} col-4`}>
                <button type="button" className="">
                  subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
