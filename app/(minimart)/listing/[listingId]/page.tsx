import { getProductByIdForListing } from "@/data/product";
import BodyPage from "../_components/bodyPage";
import PricingBox from "../_components/pricingBox";

// Padding top 10

interface listingPageProps {
  params: {
    listingId: string;
  };
}

const ListingPage = async ({ params }: listingPageProps) => {
  const { listingId } = params;
  const result = await getProductByIdForListing(listingId);
  if (!result) return <div>Error Page</div>;

  return (
    <div className="w-full min-h-[200vh] p-4 md:flex md:gap-x-12">
      <div className="md:w-[55vw] lg:w-[60vw] xl:w-[65vw] py-10">
        <BodyPage
          title={result.title}
          price={result.basePrice}
          description={result.description}
        />
      </div>
      <div className="md:w-[45vw] lg:w-[40vw] xl:w-[35vw] sticky h-full top-0 align-top py-10">
        <PricingBox
          price={result.basePrice}
          title={result.title}
          description={result.description}
        />
      </div>
    </div>
  );
};

export default ListingPage;
