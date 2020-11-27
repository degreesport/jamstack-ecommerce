import uuid from 'uuid/v4'

let inventory = [
  {
   categories: ['custom artwork'],
   name: 'Custom Painted Pet Mug - Style 2',
   price: '29.99',
   image: '../images/products/mug1.jpg',
   description: 'Our artist will turn any picture of your pet into piece of beautiful artwork for you to display on one of our high quality ceramic mugs.',
   brand: 'mugPaw',
   currentInventory: 299
 },
 {
   categories: ['custom artwork'],
   name: 'Custom Painted Pet Mug - Style 1',
   price: '29.99',
   image: '../images/products/mug2.jpg',
   description: 'Our artist will turn any picture of your pet into piece of beautiful artwork for you to display on one of our high quality ceramic mugs.',
   brand: 'mugPaw',
   currentInventory: 300
 },
 {
   categories: ['custom artwork'],
   name: 'Custom Painted Pet Mug - Style 2',
   price: '29.99',
   image: '../images/products/mug3.jpg',
   description: 'Our artist will turn any picture of your pet into piece of beautiful artwork for you to display on one of our high quality ceramic mugs.',
   brand: 'mugPaw',
   currentInventory: 299
 },
 {
   categories: ['custom artwork'],
   name: 'Custom Painted Pet Mug - Style 1',
   price: '29.99',
   image: '../images/products/mug4.jpg',
   description: 'Our artist will turn any picture of your pet into piece of beautiful artwork for you to display on one of our high quality ceramic mugs.',
   brand: 'mugPaw',
   currentInventory: 300
 },
 {
   categories: ['custom artwork', 'multi pet'],
   name: 'Custom Painted 2 Pets Mug',
   price: '29.99',
   image: '../images/products/mug5.jpg',
   description: 'Our artist will turn any picture of your pet into piece of beautiful artwork for you to display on one of our high quality ceramic mugs.',
   brand: 'mugPaw',
   currentInventory: 299
 },
 {
   categories: ['custom artwork', 'multi pet'],
   name: 'Custom Painted 3 Pets Mug',
   price: '29.99',
   image: '../images/products/mug6.jpg',
   description: 'Our artist will turn any picture of your pet into piece of beautiful artwork for you to display on one of our high quality ceramic mugs.',
   brand: 'mugPaw',
   currentInventory: 299
 },
 {
   categories: ['custom artwork', 'multi pet'],
   name: 'Custom Painted 4 Pets Mug',
   price: '29.99',
   image: '../images/products/mug7.jpg',
   description: 'Our artist will turn any picture of your pet into piece of beautiful artwork for you to display on one of our high quality ceramic mugs.',
   brand: 'mugPaw',
   currentInventory: 299
 },
 {
   categories: ['dog', 'pets name', 'labrador'],
   name: 'Labrador Mug W Custom Name',
   price: '24.99',
   image: '../images/products/mug8.jpg',
   description: 'Our artist will turn any picture of your pet into piece of beautiful artwork for you to display on one of our high quality ceramic mugs.',
   brand: 'mugPaw',
   currentInventory: 299
 },
 {
   categories: ['dog', 'pets name', 'golden'],
   name: 'Golden Retriver Mug W Custom Name',
   price: '24.99',
   image: '../images/products/mug9.jpg',
   description: 'Our artist will turn any picture of your pet into piece of beautiful artwork for you to display on one of our high quality ceramic mugs.',
   brand: 'mugPaw',
   currentInventory: 300
 },
 {
   categories: ['dog', 'pets name', 'husky'],
   name: 'Husky Mug W Custom Name',
   price: '24.99',
   image: '../images/products/mug10.jpg',
   description: 'Our artist will turn any picture of your pet into piece of beautiful artwork for you to display on one of our high quality ceramic mugs.',
   brand: 'mugPaw',
   currentInventory: 299
 },
 {
   categories: ['dog', 'pets name', 'bulldog'],
   name: 'Bulldog Mug W Custom Name',
   price: '24.99',
   image: '../images/products/mug11.jpg',
   description: 'Our artist will turn any picture of your pet into piece of beautiful artwork for you to display on one of our high quality ceramic mugs.',
   brand: 'mugPaw',
   currentInventory: 300
 },
 {
   categories: ['dog', 'pets name', 'shepard'],
   name: 'German Shepard Mug W Custom Name',
   price: '24.99',
   image: '../images/products/mug12.jpg',
   description: 'Our artist will turn any picture of your pet into piece of beautiful artwork for you to display on one of our high quality ceramic mugs.',
   brand: 'mugPaw',
   currentInventory: 299
 },
 {
   categories: ['dog', 'pets name', 'pug'],
   name: 'Pug Mug W Custom Name',
   price: '24.99',
   image: '../images/products/mug13.jpg',
   description: 'Our artist will turn any picture of your pet into piece of beautiful artwork for you to display on one of our high quality ceramic mugs.',
   brand: 'mugPaw',
   currentInventory: 300
 },
 {
   categories: ['dog', 'pets name', 'wiener'],
   name: 'Wiener Mug W Custom Name',
   price: '24.99',
   image: '../images/products/mug14.jpg',
   description: 'Our artist will turn any picture of your pet into piece of beautiful artwork for you to display on one of our high quality ceramic mugs.',
   brand: 'mugPaw',
   currentInventory: 299
 },
  {
   categories: ['cat', 'pets name'],
   name: 'Cat Mug W Custom Name - Style 1',
   price: '24.99',
   image: '../images/products/mug15.jpg',
   description: 'Our artist will turn any picture of your pet into piece of beautiful artwork for you to display on one of our high quality ceramic mugs.',
   brand: 'mugPaw',
   currentInventory: 300
 },
 {
   categories: ['cat', 'pets name'],
   name: 'Cat Mug W Custom Name - Style 2',
   price: '24.99',
   image: '../images/products/mug16.jpg',
   description: 'Our artist will turn any picture of your pet into piece of beautiful artwork for you to display on one of our high quality ceramic mugs.',
   brand: 'mugPaw',
   currentInventory: 299
 },
 {
   categories: ['cat', 'pets name'],
   name: 'Cat Mug W Custom Name - Style 3',
   price: '24.99',
   image: '../images/products/mug17.jpg',
   description: 'Our artist will turn any picture of your pet into piece of beautiful artwork for you to display on one of our high quality ceramic mugs.',
   brand: 'mugPaw',
   currentInventory: 300
 },
  {
   categories: ['cat', 'funny', 'pre designed'],
   name: 'Cat Lady Mug',
   price: '19.99',
   image: '../images/products/mug18.jpg',
   description: 'Our artist will turn any picture of your pet into piece of beautiful artwork for you to display on one of our high quality ceramic mugs.',
   brand: 'mugPaw',
   currentInventory: 300
 },
 {
   categories: ['cat', 'funny', 'pre designed'],
   name: 'Kitten Pun Mug',
   price: '19.99',
   image: '../images/products/mug19.jpg',
   description: 'Our artist will turn any picture of your pet into piece of beautiful artwork for you to display on one of our high quality ceramic mugs.',
   brand: 'mugPaw',
   currentInventory: 300
 },
 {
   categories: ['cat', 'funny', 'pre designed'],
   name: 'Cat Persons Will Mug',
   price: '19.99',
   image: '../images/products/mug20.jpg',
   description: 'Our artist will turn any picture of your pet into piece of beautiful artwork for you to display on one of our high quality ceramic mugs.',
   brand: 'mugPaw',
   currentInventory: 300
 },
 {
   categories: ['dog', 'funny', 'pre designed'],
   name: 'Dog Mom Mug',
   price: '19.99',
   image: '../images/products/mug21.jpg',
   description: 'Our artist will turn any picture of your pet into piece of beautiful artwork for you to display on one of our high quality ceramic mugs.',
   brand: 'mugPaw',
   currentInventory: 299
 },
 {
   categories: ['dog', 'funny', 'pre designed'],
   name: 'Dog Father Mug',
   price: '19.99',
   image: '../images/products/mug22.jpg',
   description: 'Our artist will turn any picture of your pet into piece of beautiful artwork for you to display on one of our high quality ceramic mugs.',
   brand: 'mugPaw',
   currentInventory: 300
 },
]

inventory.map(i => {
  i.id = uuid()
  return i
})

export default inventory