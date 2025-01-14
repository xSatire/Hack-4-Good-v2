import { Mail } from "lucide-react";
import Link from "next/link";

const MessageLogo = () => {
  return (
    <Link href="/seller-inbox">
      {" "}
      <Mail className="w-5 h-5" />
    </Link>
  );
};

export default MessageLogo;
