export function content() {
    const contentDiv = document.querySelector('#content');

    // Heading: Past Pawn Pub
    const head = document.createElement('h1');
    head.textContent = 'Past Pawn Pub';
    head.classList.add('head-title');
    contentDiv.appendChild(head);

    // Pub image
    const pubImage = document.createElement('img');
    pubImage.classList.add('pub-image');
    pubImage.src = '../src/assets/pub-tables.jpg';
    pubImage.alt = 'Pub tables'
    contentDiv.appendChild(pubImage);

    // Menus and info paragraphs
    // Menu
    const menu = document.createElement('p');
    menu.textContent = 'Full service bar available';
    menu.classList.add('menu');
    contentDiv.appendChild(menu);

    // Hours
    const hours = document.createElement('p');
    hours.textContent = 'Open 11am-2am Daily';
    hours.classList.add('hours');
    contentDiv.appendChild(hours);
}