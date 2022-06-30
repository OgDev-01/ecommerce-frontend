import HorizontalLine from "@/components/atoms/horizontalLine";
import BrandSponsors from "../../Sections/SectionBrandSponsors";
import MainHero from "../../Sections/SectionMainHero";
import NewArrivals from "../../Sections/SectionNewArrivals";

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
  return (
    <>
      <MainHero {...heroContent} />
      <NewArrivals />
      <HorizontalLine />
      <BrandSponsors {...brandSponsorsContent} />
    </>
  );
}
