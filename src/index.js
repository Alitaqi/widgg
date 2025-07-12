import './style.css';

function createFloatingIcon() {
  const icon = document.createElement('div');
  icon.id = 'widget-floating-icon';
  icon.innerHTML = '📅'; // You can replace with SVG or image

  icon.onclick = () => {
    if (!document.getElementById('widget-modal')) {
      showWidgetModal();
    }
  };

  document.body.appendChild(icon);
}

function showWidgetModal() {
  const modal = document.createElement('div');
  modal.id = 'widget-modal';
  modal.innerHTML = `
    <div class="widget-backdrop"></div>
    <div class="widget-box">
      <h3>Hello from Widget 👋</h3>
      <p>This is your 2-step form or content.</p>
      <button id="close-widget">Close</button>
    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById('close-widget').onclick = () => {
    modal.remove();
  };
}

createFloatingIcon();
