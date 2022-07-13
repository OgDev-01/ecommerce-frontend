import Button from "../../../atoms/button";
import * as styles from "./styles.module.scss";

const ComponentNotFound = (props) => {
  return (
    <section>
      <div className='container'>
        <div className={styles.wrapper}>
          <div>
            <h1>Page Not Found</h1>
          </div>

          <div className={styles.errorimage}>
            <img src='images/icons/tailor-dummy.svg' alt='error logo' />
          </div>

          <div>
            <p>
              We cant find the page you looking for, click the &apos;
              <strong>button</strong> to return home
            </p>
          </div>
        </div>
        <div className={styles.buttonWrap}>
          <Button {...props} />
        </div>
      </div>
    </section>
  );
};

export default ComponentNotFound;
