export default function createHearder() {
  const commonHeader = document.createElement(`header`);
  commonHeader.innerHTML = `
  <h1>Notre mini site en Node.js</h1>
    <nav>
      <ul>
        <li>Accueil</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  `;

  return commonHeader;
}
