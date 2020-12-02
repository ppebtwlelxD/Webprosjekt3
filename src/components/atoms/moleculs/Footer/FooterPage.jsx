import React from "react";
import styles from '../Footer/styles.scss';

const FooterPage = () => {
  return (

    <footer class="footer-container">

      <div>
        <ul className="footer-ul">

          <li className="footer-li">
            <a className="footer-a" href="#">Home</a>
          </li>

        </ul>

      </div>

      <div>
        <ul className="footer-ul">

          <li className="footer-li">
            <a className="footer-a" href="#">Community</a>
          </li>

        </ul>

      </div>

      <div>
        <ul className="footer-ul">

          <li className="footer-li">
            <a className="footer-a" href="#">Social</a>
          </li>

        </ul>

      </div>

      <div>
        <ul className="footer-ul">
          <li className="footer-li">
            <a   className="footer-a testclass1" >Market</a>
          </li>
        </ul>

      </div>

      <div>
        <a className="footer-icons" href="#"><i class="fab fa-facebook-square"></i></a>
      </div>

      <div>
        <a className="footer-icons" href="#"><i class="fab fa-twitter-square"></i></a>
      </div>

      <div>
        <a className="footer-icons" href="#"><i class="fab fa-linkedin"></i></a>
      </div>


    </footer>

  );
}

export default FooterPage;