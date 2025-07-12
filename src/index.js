import './styles.css';
import { showWidget } from './widget';

function createFloatingButton() {
  const btn = document.createElement('button');
  btn.innerText = '📅';
  btn.title = 'Open Reservation';
  btn.id = 'my-widget-fab';
  btn.onclick = showWidget;
  document.body.appendChild(btn);
}

createFloatingButton();
