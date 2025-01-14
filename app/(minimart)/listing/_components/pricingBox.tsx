import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCheck, CheckCircle, Clock, HeartIcon } from "lucide-react";
import DrawerButton from "./drawButton";

//Can maybe show number of people who purchased it in the past 4 days
interface pricingBoxProps {
  price: number;
  title: string;
  description: string;
}

// Need to edit the props

const PricingBox = ({ price, title, description }: pricingBoxProps) => {
  return (
    <div className="flex flex-col space-y-5 items-end w-full h-full px-6">
      <div className="flex gap-x-3">
        <HeartIcon />
      </div>
      <Card className="w-full py-5">
        <CardContent className="space-y-1">
          <div className="flex justify-between items-center space-x-3">
            <p className="font-semibold tracking-wide">{title}</p>
            <p className="text-xl font-light tracking-tight">USD {price}</p>
          </div>
          <p className="font-light text-main-500 tracking-tight">
            {description}
          </p>
          <div className="flex items-center justify-start gap-x-2 py-2 font-semibold text-sm">
            <Clock className="h-4 w-4" />
            <p>Estimated Time: {0} Days</p>
          </div>
          <div className="flex items-center justify-start gap-x-2">
            <CheckCheck className="h-4 w-4" />
            <p className="text-main-400 font-light text-sm">
              Promoted Track: {0}
            </p>
          </div>
          <div className="flex items-center justify-start gap-x-2 pb-5">
            <CheckCheck className="h-4 w-4" />
            <p className="text-main-400 font-light text-sm">Platform: 1</p>
          </div>
          <DrawerButton />
          {/* Should have another button for Contact Seller */}
        </CardContent>
      </Card>
    </div>
  );
};

export default PricingBox;
