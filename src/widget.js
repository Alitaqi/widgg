export function showWidget() {
    if (document.getElementById('widget-popup')) return;
  
    const popup = document.createElement('div');
    popup.id = 'widget-popup';
    popup.innerHTML = `
      <div style="
        position: fixed;
        bottom: 90px;
        right: 20px;
        width: 300px;
        background: white;
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        z-index: 9999;
      ">
        <h4>Hello Widget 👋</h4>
        <p>This can be your step 1</p>
        <button onclick="document.getElementById('widget-popup').remove()">Close</button>
      </div>
    `;
  
    document.body.appendChild(popup);
  }
  