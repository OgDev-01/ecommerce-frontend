import * as styles from "./styles.module.scss";

export const NotMobile = () => {
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
              Visit the website on a mobile device to explore as it is only
              available on <strong>mobile</strong> devices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
