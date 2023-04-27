export class Product {
  constructor(
    private id: string,
    private name: string,
    private price: number,
    private description: string,
    private brand: {
      id: string;
      name: string;
    }
  ) {}

  // public getId(){
  //     return this.id
  // }

  public get _id(): string {
    return this.id;
  }
  public set _id(value: string) {
    this.id = value;
  }

  public get _name(): string {
    return this.name;
  }
  public set _name(value: string) {
    this.name = value;
  }

  public get _price(): number {
    return this.price;
  }
  public set _price(value: number) {
    this.price = value;
  }

  public get _description(): string {
    return this.description;
  }
  public set _description(value: string) {
    this.description = value;
  }

  public get _brand(): { id: string; name: string } {
    return this.brand;
  }

  public set _brand(value: { id: string; name: string }) {
    this.brand = value;
  }
}
