type User = {
  id: number;
  image: string;
  position: string;
  name: string;
  company_adress: string;
  company: string;
  phone: string;
  adress: {
    home_number: number,
    street: string,
    apartment: string,
    city: string,
    code: string,
  }
}
