-- CreateTable
CREATE TABLE "Shortcut" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "windows" TEXT[],
    "mac" TEXT[],

    CONSTRAINT "Shortcut_pkey" PRIMARY KEY ("id")
);
