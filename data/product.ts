import { db } from "@/lib/db";

export const searchByRelevance = async (query: string) => {
  const result = await db.product.findMany({
    take: 100,
    orderBy: {
      _relevance: {
        fields: ["description"],
        search: query,
        sort: "desc",
      },
    },
  });
  return result;
};

export const getProductByIdForListing = async (query: string) => {
  try {
    const result = await db.product.findUnique({
      where: { productId: query },
    });
    return result;
  } catch {
    return null;
  }
};
