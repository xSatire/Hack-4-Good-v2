import { Button } from "@/components/ui/button";
import { Crosshair, ListMusic, MapPin, Star } from "lucide-react";
import Image from "next/image";

//Edit here
interface bodyPageProps {
  title: string;
  price: number;
  description: string;
}

const BodyPage = async ({ title, price, description }: bodyPageProps) => {
  return (
    <div className="flex flex-col space-y-10 p-5">
      <div className="flex flex-col space-y-4">
        <h1 className="font-bold tracking-normal text-3xl">{description}</h1>
        <div className="flex gap-x-2 items-center">
          <Star className="fill-main-700 w-4 h-4" />
          <p className="font-semibold tracking-wide">4.9</p>
        </div>
        <div className="bg-main-100 p-2">
          <div className="relative aspect-[4/3] max-w-[80vw] md:max-w-[35vw] lg:max-w-[40vw] mx-auto object-scale-down">
            <Image
              src="/test-pitch.png"
              alt="Test Photo"
              fill
              className="object-scale-down"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-x-2">
            <Crosshair className="w-4 h-4" />
            <p className="font-semibold tracking-wide">Targeted Platform:</p>
            <div className="flex gap-x-1 font-light line-clamp-1">
              Something
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <ListMusic className="w-4 h-4" />
            <p className="font-semibold tracking-wide">Music Genre:</p>
            <div className="flex gap-x-1 font-light line-clamp-1">Music</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <h2 className="font-semibold text-xl">About The Product</h2>
        <p className="tracking-tight">{description}</p>
      </div>
      <div className="flex flex-col space-y-4">
        <h2 className="font-semibold text-xl">Seller Profile</h2>
        <div className="flex justify-start gap-x-4 items-center">
          <div className="relative rounded-full w-44 aspect-square">
            <Image src={"placeholder_profile.svg"} alt="seller profile" fill />
          </div>
          <div className="flex flex-col space-y-2">
            <p className="font-semibold text-2xl">Muhammadiyah</p>
            <div className="flex gap-x-1 items-center">
              <MapPin className="h-4 w-4" />
              <p className="text-sm font-light tracking-tight">Singapore</p>
            </div>
            <Button variant={"outline"}>Contact Seller</Button>
          </div>
          {/* TO DO: MAYBE CAN INCLUDE BADGES ETC */}
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <h2 className="font-semibold text-xl">Order Details</h2>
      </div>
    </div>
  );
};

export default BodyPage;
