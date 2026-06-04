import { prisma } from "@/lib/prisma";

export async function getFavoritesByUserId(userId: string) {
  return prisma.favorite.findMany({
    where: { userId },
      select: { rawgId: true, name: true, imageUrl: true },
  });
}

export async function addFavorite(
  userId: string,
  rawgId: number,
  name: string,
  imageUrl?: string,
) {
  return prisma.favorite.create({
    data: { userId, rawgId, name, imageUrl },
    select: { rawgId: true, name: true, imageUrl: true },
  });
} 

export async function removeFavorite(userId: string, rawgId: number) {
  return prisma.favorite.delete({
    where: { userId_rawgId: { userId, rawgId } },
  });
}