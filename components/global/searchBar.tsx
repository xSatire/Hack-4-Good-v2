"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { DEV_URL } from "@/constant";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const urlSearchParams = new URLSearchParams({ search: searchQuery });
    const url = new URL(`${DEV_URL}/listing?${urlSearchParams.toString()}`);

    router.push(url.toString());
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mr-12 grow">
      <div className="relative">
        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 pointer-events-none" />
        <Input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-8 pr-16 py-2 w-full focus-visible:ring-1 focus-visible:ring-main-400"
        />
      </div>
    </form>
  );
};
