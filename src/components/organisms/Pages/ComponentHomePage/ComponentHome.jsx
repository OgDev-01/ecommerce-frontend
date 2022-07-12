import HorizontalLine from "@/components/atoms/horizontalLine";
import BrandSponsors from "../../Sections/SectionBrandSponsors";
import Collections from "../../Sections/SectionCollections";
import FollowUs from "../../Sections/SectionFollowUs";
import JustForYou from "../../Sections/SectionJustForYou";
import MainHero from "../../Sections/SectionMainHero";
import NewArrivals from "../../Sections/SectionNewArrivals";
import OpenFashion from "../../Sections/SectionOpenFashion";
import Trending from "../../Sections/SectionTrending";

export function ComponentHome({
  title,
  sectionMainHero,
  sectionBrandSponsors,
  sectionCollection,
  slices,
}) {
  const [heroContent] = sectionMainHero;
  const [collectionContent] = sectionCollection;
  const [brandSponsorsContent] = sectionBrandSponsors;
  const [openFashionContent] = slices;
  const [, followUsContent] = slices;
  return (
    <>
      <MainHero {...heroContent} />
      <NewArrivals />
      <HorizontalLine />
      <BrandSponsors {...brandSponsorsContent} />
      <Collections {...collectionContent} />
      <JustForYou />
      <Trending />
      <OpenFashion {...openFashionContent} />
      <FollowUs {...followUsContent}/>
    </>
  );
}
