import React,{Fragment} from "react";
import Plusimage from "../assets/plus.png";
import styles from "./Section.module.css";

const Section = (props) => {
    return (
        <Fragment>
            <section>
                {props.users.map((user)=>(
                    <div className={styles.box__container}  key={user.id}>
                        <h3>{user.tasks}</h3>
                    </div>
                ))}
            </section>  
            <section className={styles.button__section}>
                <img src={Plusimage} onClick={props.onShow} alt="plus"/>
            </section>
        </Fragment>
    )
};
export default Section;