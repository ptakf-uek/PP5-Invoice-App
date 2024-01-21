export class Customer {
  companyName: string;
  nip: string;
  city: string;
  street: string;
  streetNumber: string;
  apartmentNumber: string;
  zipCode: string;
  comment: string;
  industry: string;
  active: boolean;

  constructor(
    companyName = '',
    nip = '',
    city = '',
    street = '',
    streetNumber = '',
    apartmentNumber = '',
    zipCode = '',
    comment = '',
    industry = '',
    active = false,
  ) {
    this.companyName = companyName;
    this.nip = nip;
    this.city = city;
    this.street = street;
    this.streetNumber = streetNumber;
    this.apartmentNumber = apartmentNumber;
    this.zipCode = zipCode;
    this.comment = comment;
    this.industry = industry;
    this.active = active;
  }

  public setCompanyName(companyName: string): void {
    this.companyName = companyName;
  }

  public getCompanyName(): string {
    return this.companyName;
  }

  public setNip(nip: string): void {
    this.nip = nip;
  }

  public getNip(): string {
    return this.nip;
  }

  public setCity(city: string): void {
    this.city = city;
  }

  public getCity(): string {
    return this.city;
  }

  public setStreet(street: string): void {
    this.street = street;
  }

  public getStreet(): string {
    return this.street;
  }

  public setStreetNumber(streetNumber: string): void {
    this.streetNumber = streetNumber;
  }

  public getStreetNumber(): string {
    return this.streetNumber;
  }

  public setZipCode(zipCode: string): void {
    this.zipCode = zipCode;
  }

  public getZipCode(): string {
    return this.zipCode;
  }

  public setComment(comment: string): void {
    this.comment = comment;
  }

  public getComment(): string {
    return this.comment;
  }

  public setIndustry(industry: string): void {
    this.industry = industry;
  }

  public getIndustry(): string {
    return this.industry;
  }

  public setActive(active: boolean): void {
    this.active = active;
  }

  public getActive(): boolean {
    return this.active;
  }

  deserialize(input: any): any {
    Object.assign(this, input);
    return this;
  }
}
