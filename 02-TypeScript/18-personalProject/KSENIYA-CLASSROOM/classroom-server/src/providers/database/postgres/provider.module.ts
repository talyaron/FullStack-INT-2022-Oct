// External libraries
import { Module } from "@nestjs/common";

// Provider
import { databaseProviders } from "./provider.providers";

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders]
})
export class DatabaseModule {}
