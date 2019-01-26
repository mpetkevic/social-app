const initialState = [
  {name: 'Hawaii', price: 3.5, desc: 'Hawaii Ananas', category: 'pizzas'},
  {name: 'Mexican', price: 3.0, desc: 'Spicy', category: 'pizzas'},
  {name: 'Vegan', price: 3.0, desc: 'Vegan', category: 'pizzas'},

  {name: 'BeefBurger', price: 2.0, desc: 'Beef', category: 'burgers'},
  {name: 'Chicken', price: 2.5, desc: 'Chicken', category: 'burgers'},

  {name: 'Teriyaki', price: 3.0, desc: 'Teriyaki', category: 'sushi'},
  {name: 'California', price: 3.0, desc: 'Californis', category: 'sushi'}

]

export default (state=initialState) => {
  return state;
}