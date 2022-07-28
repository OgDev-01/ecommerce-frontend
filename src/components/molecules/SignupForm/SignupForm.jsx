import Button from '@/components/atoms/button';
import HorizontalLine from '@/components/atoms/horizontalLine';
import * as styles from './styles.module.scss';
export const SignupForm = () => {
  const buttonProps = {
    type: 'submit',
    text: 'submit',
    icon: {
      position: 'right',
      url: '/images/icons/arrow-right.svg',
    },
  };
  return (
    <form className={styles.wrapper}>
      <div className='container'>
        <div>
          <h2>Sign Up</h2>
        </div>
        <HorizontalLine />
        <div className={styles.formDesc}>
          <p>
            Receive early access to new arrivals, sales, exclusive content,
            events and much more!
          </p>
        </div>
        <input placeholder='Email address' type='text' />
      </div>
      <Button {...buttonProps} />
    </form>
  );
};
