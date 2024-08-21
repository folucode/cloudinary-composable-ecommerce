export const products: ProductInfo[] = [
  {
    name: 'Dog Lease',
    price: 100,
    imageUrl:
      'https://cloudinary-app.s3.amazonaws.com/pexels-blue-bird-7210748.jpg',
    transformation:
      'w_400,h_400,c_auto,g_auto,q_100,e_auto_brightness,e_auto_color:80',
  },
  {
    name: 'Dog Food',
    price: 100,
    imageUrl:
      'https://cloudinary-app.s3.amazonaws.com/pexels-mart-production-8434641.jpg',
    transformation:
      'w_400,h_400,c_auto,g_auto,q_100,e_auto_brightness,e_auto_color:80',
  },
  {
    name: 'Backpack Carrier',
    price: 200,
    imageUrl:
      'https://images.pexels.com/photos/8358908/pexels-photo-8358908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    transformation:
      'w_400,h_400,c_auto,g_auto,q_100,e_auto_brightness,e_auto_color:80',
  },
  {
    name: 'Dog Toy',
    price: 300,
    imageUrl:
      'https://images.pexels.com/photos/20843208/pexels-photo-20843208/free-photo-of-dog-with-toy-on-a-brick-pavement.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    transformation:
      'w_400,h_400,c_auto,g_auto,q_100,e_auto_brightness,e_auto_color:80',
  },
];

export interface ProductInfo {
  name: string;
  price: number;
  imageUrl: string;
  transformation: string;
}
