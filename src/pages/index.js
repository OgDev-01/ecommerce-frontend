import Button from "../components/atoms/button";

export default function Home() {
  const spec = {
    // variants: "full-width",
    text: "Button",
    urlPath: "/",
    icon: {
      url: "/images/icons/shopping-bag-white.png",
      alt: "shopping bag",
      position: "left",
    },
  };

  return (
    <div className=''>
      Home page Section
      <Button {...spec}></Button>
    </div>
  );
}
