export function content() {
    const contentDiv = document.querySelector('#content');

    // Heading: Past Pawn Pub
    const head = document.createElement('h1');
    head.textContent = 'Past Pawn Pub';
    head.classList.add('head-title');
    contentDiv.appendChild(head);

    // Tabs/buttons
    const nav = document.createElement('nav');
    nav.classList.add('nav');
    contentDiv.appendChild(nav);

    // Home button
    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    homeBtn.classList.add('buttons');
    nav.appendChild(homeBtn);

    // Menu button
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.classList.add('buttons');
    nav.appendChild(menuBtn);

    // Info button
    const infoBtn = document.createElement('button');
    infoBtn.textContent = 'Info';
    infoBtn.classList.add('buttons');
    nav.appendChild(infoBtn);

    // Pub image
    const pubImage = document.createElement('img');
    pubImage.classList.add('pub-image');
    pubImage.src = '../src/assets/pub-tables.jpg';
    pubImage.alt = 'Pub tables'
    contentDiv.appendChild(pubImage);

    // Menus and info paragraphs
    // Menu
    const menuPara = document.createElement('p');
    menuPara.textContent = 'Full service bar available';
    menuPara.classList.add('menu-para');
    contentDiv.appendChild(menuPara);

    // Hours
    const hours = document.createElement('p');
    hours.textContent = 'Open 11am-2am Daily';
    hours.classList.add('hours');
    contentDiv.appendChild(hours);
}