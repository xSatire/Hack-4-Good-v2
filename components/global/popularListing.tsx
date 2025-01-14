import ItemWrapper from "./itemWrapper";
//Might want to change this into a carousel
const PopularListing = () => {
  // TODO: Edit items
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
      <ItemWrapper />
      <ItemWrapper />
      <ItemWrapper />
      <ItemWrapper />
    </div>
  );
};

export default PopularListing;
