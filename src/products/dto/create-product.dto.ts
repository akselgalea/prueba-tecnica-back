
import { IsString, IsNumber, IsPositive, IsOptional, IsNotEmpty, IsUrl } from "class-validator";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsUrl()
  image: string;

  @IsNumber()
  @IsPositive()
  storeId: number;
}
