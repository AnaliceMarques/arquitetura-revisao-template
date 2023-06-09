import { ProductDatabase } from "../database/ProductDatabase";

export class ProductBusiness {
  constructor(private productDatabase: ProductDatabase) {}

  public async getProducts(q: string | undefined) {
    let productsDB;

    if (q) {
      //caso receba uma querie com o nome do produto
      //aqui vai ter a implementação da comunicação com o banco de dados
      //preciso chamar o método do productDatabase
      //getProductByName
      productsDB = await this.productDatabase.getproductByName(q);
    } else {
      //chamar o metodo de buscar todos os produtos
      //getAllProducts
    }
  }
}
