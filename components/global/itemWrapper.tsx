import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

//Missing Image, do when I set up S3 Stack
interface itemWrapperProps {
  productId: string;
  price: number;
  desc: string;
}

const ItemWrapper = ({ productId, price, desc }: itemWrapperProps) => {
  return (
    <Link href={`http://localhost:3000/listing/${productId}`}>
      <div className="flex flex-col space-y-6 col-span-1 hover:bg-main-100 p-2 shadow-md rounded-lg">
        <div className="flex flex-col space-y-6">
          <div className="relative object-cover w-full aspect-video rounded-lg shadow-sm">
            <Image
              src={"/placeholder.svg"}
              alt="Item for sale"
              className="object-cover"
              fill
            />
          </div>
          <div className="flex flex-col">
            <div className=" flex gap-x-1 items-center mb-1">
              <div className="h-7 w-7 relative">
                <Image
                  fill
                  alt="profile pic"
                  className="object-cover rounded-full"
                  src={"/placeholder_profile.svg"}
                />
              </div>
              <p className="font-semibold text-sm tracking-tight">
                Muhammadiyah
              </p>
            </div>
            <div className="line-clamp-2 text-main-500 tracking-tight font-light leading-5 mr-2">
              {desc}
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center justify-start gap-x-1">
            <Star className="fill-yellow-500 text-yellow-200 h-4 w-4" />
            <p className="font-semibold text-lg">4.8</p>
          </div>
          <div className="font-semibold text-lg tracking-tight mr-2">
            USD {price}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemWrapper;
