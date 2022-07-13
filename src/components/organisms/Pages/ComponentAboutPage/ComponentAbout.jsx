import HorizontalLine from "@/components/atoms/horizontalLine";
import NextImage from "@/components/atoms/NextImage";
import RichText from "@/components/atoms/RichText";
import SignupForm from "@/components/molecules/SignupForm";
import * as styles from "./styles.module.scss";

export const ComponentAbout = ({ slices, title }) => {
  const [content] = slices;

  return (
    <>
      <section className={styles.wrapper}>
        <h1>Our Story</h1>
        <HorizontalLine />
        <div className={`${styles.story} container`}>
          <div>
            <RichText field={content.primary.story} />
          </div>
          <div className=''>
            <RichText field={content.primary.storyTwo} />
          </div>
        </div>
        <div>
          <NextImage field={content.primary.storyHero} />
        </div>
        <div>
          <SignupForm />
        </div>
      </section>
    </>
  );
};
