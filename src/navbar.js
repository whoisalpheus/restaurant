export function navBar() {
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
}
navBar();