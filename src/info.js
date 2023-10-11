import { navBar } from './navbar';

export function infoContent() {
    const contentDiv = document.querySelector('#content');

    // Info title
    const infoTitle = document.createElement('h1');
    infoTitle.textContent = 'Info';
    contentDiv.appendChild(infoTitle);

    // Chess image Randy Fath
    const chessImage = document.createElement('img');
    chessImage.classList.add('chess-image');
    chessImage.src = '../src/assets/chess-image.jpg';
    chessImage.alt = 'Chess image';
    chessImage.style.width = '300px';
    chessImage.style.height ='150px';
    contentDiv.appendChild(chessImage);
    
    // Info content
    const infoText = document.createElement('p');
    infoText.textContent = 'A passed pawn eventually becomes a Queen. Come forget your past at the pub.'
    contentDiv.appendChild(infoText);
}
infoContent();
