import { IsString, IsNumber, IsPositive, IsOptional, IsNotEmpty, IsUrl } from "class-validator";

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @IsUrl()
  @IsOptional()
  image?: string;
}
