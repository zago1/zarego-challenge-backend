-- CreateTable
CREATE TABLE "countries" (
    "id" SERIAL NOT NULL,
    "country_name" TEXT NOT NULL,
    "performance_oriented" DOUBLE PRECISION NOT NULL,
    "autocratic" DOUBLE PRECISION NOT NULL,
    "country_cluster" TEXT NOT NULL,
    "charisma" DOUBLE PRECISION NOT NULL,
    "decisive" DOUBLE PRECISION NOT NULL,
    "modesty" DOUBLE PRECISION NOT NULL,
    "date_added" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);
