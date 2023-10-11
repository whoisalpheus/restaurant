import { navBar } from './navbar';

export function menuContent() {
    const contentDiv = document.querySelector('#content');

    // Menu title
    const title = document.createElement('h1');
    title.textContent = 'Menus';
    contentDiv.appendChild(title);
    
    // Drink title
    const drinkMenu = document.createElement('h3');
    drinkMenu.textContent = 'Drink Menu';
    contentDiv.appendChild(drinkMenu);
    
    // Drink image
    const drinkImage = document.createElement('img');
    drinkImage.classList.add('drink-image');
    drinkImage.src = '../src/assets/drink-image.jpg';
    drinkImage.alt = 'Drink image';
    drinkImage.style.width = '300px';
    drinkImage.style.height = '150px';
    contentDiv.appendChild(drinkImage);
    const drinkCredit = document.createElement('h6');
    drinkCredit.textContent = 'Pylyp Sukhenko via unsplash.com';
    
    
    // Drink items
    const drink1 = document.createElement('p');
    drink1.textContent = 'Old Fashioned...$12';
    contentDiv.appendChild(drink1);
    
    const drink2 = document.createElement('p');
    drink2.textContent = 'Dark n Stormy...$12';
    contentDiv.appendChild(drink2);
    
    // Food title
    const foodMenu = document.createElement('h3');
    foodMenu.textContent = 'Food Menu';
    contentDiv.appendChild(foodMenu);
    
    // Food image Ryan Concepcion
    const foodImage = document.createElement('img');
    foodImage.classList.add('food-image');
    foodImage.src = '../src/assets/food-image.jpg';
    foodImage.alt = 'Food image';
    foodImage.style.width = '300px';
    foodImage.style.height = '150px';
    contentDiv.appendChild(foodImage);
    const foodCredit = document.createElement('h6');
    foodCredit.textContent = 'Ryan Concepcion via unsplash.com';
    
    // Food items
    const food1 = document.createElement('p');
    food1.textContent = 'Mushroom Burger...$12';
    contentDiv.appendChild(food1);
    
    const food2 = document.createElement('p');
    food2.textContent = 'Chicken Wrap...$12';
    contentDiv.appendChild(food2);    
}
menuContent();