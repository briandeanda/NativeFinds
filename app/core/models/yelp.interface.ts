export interface IYelp {
  total: number,
  businesses: [ IBusiness ],
  region: {
    center: {
      latitude: number,
      longitude: number
    }
  }
}

export interface IBusiness {
  rating: number,
  price: string,
  phone: string,
  id: string,
  alias: string,
  is_closed: boolean,
  categories: [
    {
      alias: string,
      title: string
    }
  ],
  review_count: number,
  name: string,
  url: string,
  coordinates: {
    latitude: number,
    longitude: number
  },
  image_url: string,
  location: {
    city: string,
    country: string,
    address2: string,
    address3: string,
    state: string,
    address1: string,
    zip_code: string
  },
  distance: number,
  transactions: string[]
}