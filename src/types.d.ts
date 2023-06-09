export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export type ListOfProducts = Product[]

export interface Props {
  products: ListOfProducts
}

export interface PropsMenuOption {
  option: string
}
