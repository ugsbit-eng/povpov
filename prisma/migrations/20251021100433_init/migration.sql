-- CreateTable
CREATE TABLE "StrategyStats" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "totalProfit" REAL NOT NULL,
    "winCount" INTEGER NOT NULL,
    "lossCount" INTEGER NOT NULL,
    "totalTrades" INTEGER NOT NULL,
    "pnlHistory" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "StrategyStats_id_key" ON "StrategyStats"("id");
