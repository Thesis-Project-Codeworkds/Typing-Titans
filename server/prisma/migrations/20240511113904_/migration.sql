/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "chapter" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Profile";

-- CreateTable
CREATE TABLE "Progress" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "speed" DOUBLE PRECISION NOT NULL,
    "accuracy" DOUBLE PRECISION NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserToFriends" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserToFriends_AB_unique" ON "_UserToFriends"("A", "B");

-- CreateIndex
CREATE INDEX "_UserToFriends_B_index" ON "_UserToFriends"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Progress" ADD CONSTRAINT "Progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToFriends" ADD CONSTRAINT "_UserToFriends_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToFriends" ADD CONSTRAINT "_UserToFriends_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
