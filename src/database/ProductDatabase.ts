import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
  public static TABLE_PRODUCTS = "products";

  public async getproductByName(q: string) {
    const productsDB = await BaseDatabase.connection(
      ProductDatabase.TABLE_PRODUCTS
    )
      .select()
      .where("name", "LIKE", `%${q}%`);
    return productsDB;
  }
}
