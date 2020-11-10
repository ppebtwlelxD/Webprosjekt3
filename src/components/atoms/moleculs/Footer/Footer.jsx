import React from "react";
import styles from "../Footer/styles.scss";

// I alle <a href></a> må man inserte en const slik at linken linker deg til rigtig sted
// Det bude være de samme som brukes i header filen
// Bildene må også fikses når vi har den finale fil structuren

const Footer = () => {
    return (
        <div className={styles.footer}>

            <div className={styles.para}>
                <h1 className={styles.Fheader}>Companies</h1>
                <ul>
                    <li>
                        <a href="#">All companies</a>
                    </li>

                    <li>
                        <a href="#">Get in touch</a>
                    </li>
                </ul>
            </div>

            <div className={styles.para}>
                <h1 className={styles.Fheader}>Projects</h1>
                <ul>
                    <li>
                        <a href="#">All projects</a>
                    </li>


                    <li>
                        <a href="#">Applications</a>
                    </li>
                </ul>
            </div>

            <div className={styles.para}>
                <h1 className={styles.Fheader}>Profile</h1>
                <ul>
                    <li>
                        <a href="#">User List</a>
                    </li>

                    <li>
                        <a href="#">Change Profile</a>
                    </li>

                    <li>
                        <a href="#">Delete Profile</a>
                    </li>
                </ul>
            </div>

            <div className={styles.para}>
                <h1 className={styles.Fheader}>Help</h1>
                <ul>
                    <li>
                        <a href="#">About</a>
                    </li>

                    <li>
                        <a href="#">Help</a>
                    </li>

                    <li>
                        <a href="#">Site Map</a>
                    </li>
                </ul>
            </div>


            <div className={styles.para}>
                <h1 className={styles.Fheader}>Social</h1>
                <ul>
                    <img src="#" width={32} style={{ width: "32px" }} />
                    <br></br>
                    <img src="#" width={32} style={{ width: "32px" }} />
                </ul>
            </div>

            <div className="clearfix" />
        </div>
    );
}

export default Footer;

