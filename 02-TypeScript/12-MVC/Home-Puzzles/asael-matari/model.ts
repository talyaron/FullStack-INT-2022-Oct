class deliveryDetails {
  constructor(
    public fullName: string,
    public city: string,
    public address: string | number,
    public phone: string
  ) {}
}

const usersDetails:deliveryDetails[]=[]