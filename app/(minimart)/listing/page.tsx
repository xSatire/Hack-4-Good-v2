import ItemWrapper from "@/components/global/itemWrapper";
import { searchByRelevance } from "@/data/product";
import { tsQueryPreprocess } from "@/lib/utils";

interface listingPageProps {
  searchParams?: { [key: string]: string | undefined };
}

const handleSearchParams = async (search: string) => {
  const searchProcessed = tsQueryPreprocess(search!);

  const listing = await searchByRelevance(searchProcessed);
  return listing;
};

const ListingPage = async ({ searchParams }: listingPageProps) => {
  // When there is no SearchParams
  if (!searchParams || "search" in searchParams == false)
    return <div>Some other page</div>;
  //Need to preprocess your query or else tserror
  const search = searchParams["search"];

  const data = await handleSearchParams(search!);
  console.log(data);

  //Include items + pagination
  return (
    <div className="w-full min-h-full py-8 px-4 md:px-6">
      <div className="flex flex-col space-y-8">
        <h2 className="text-2xl md:text-3xl tracking-wide">
          Results for <span className="font-semibold">{search}</span>
        </h2>
        {/* Maybe a category Bar here */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data.map((item) => (
            <ItemWrapper
              key={item.productId}
              productId={item.productId}
              desc={item.description}
              price={item.basePrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
