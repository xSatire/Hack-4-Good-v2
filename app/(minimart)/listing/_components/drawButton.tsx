"use client";

import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/useModal";
import PurchasingDrawer from "@/components/modals/purchasingDrawer";
import { ArrowRight, ArrowRightCircle } from "lucide-react";
import { useEffect, useState } from "react";

const DrawerButton = () => {
  const [show, setShow] = useState(false);
  const { setOpen } = useModal();
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <>
      <Button
        variant={"default"}
        size={"sm"}
        onClick={setOpen}
        className="w-full font-semibold tracking-wider flex justify-center items-center gap-x-2"
      >
        <ArrowRightCircle className=" h-4 w-4" />
        <div>Continue</div>
      </Button>
      {show && <PurchasingDrawer />}
    </>
  );
};

export default DrawerButton;
