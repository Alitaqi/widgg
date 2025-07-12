import './styles.css';
import { showWidget } from './widget';

function injectCSS() {
  const styleHref = 'https://yourdomain.com/assets/styles.css'; // 🔁 Change to your deployed CSS path
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = styleHref;
  link.id = 'my-widget-style';
  document.head.appendChild(link);
}

function createFloatingButton() {
  const btn = document.createElement('button');
  btn.innerText = '✅';
  btn.title = 'Open Reservation';
  btn.id = 'my-widget-fab';
  btn.onclick = showWidget;
  document.body.appendChild(btn);
}

// Inject styles and render FAB
injectCSS();
createFloatingButton();
