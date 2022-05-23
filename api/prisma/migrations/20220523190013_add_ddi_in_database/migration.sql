/*
  Warnings:

  - You are about to drop the `refreshToken` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ddi` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "refreshToken" DROP CONSTRAINT "refreshToken_userId_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "ddi" VARCHAR(20) NOT NULL;

-- DropTable
DROP TABLE "refreshToken";
