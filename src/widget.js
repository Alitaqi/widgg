export function showWidget() {
    // Avoid multiple popups
    if (document.getElementById('widget-modal')) return;
  
    // Create outer modal wrapper
    const modal = document.createElement('div');
    modal.id = 'widget-modal';
  
    // Modal content (backdrop + box)
    modal.innerHTML = `
      <div class="widget-backdrop" onclick="document.getElementById('widget-modal').remove()"></div>
      <div class="widget-box">
        <h4>Hello Widget 👋</h4>
        <p>This can be your step 1</p>
        <button onclick="document.getElementById('widget-modal').remove()">Close</button>
      </div>
    `;
  
    document.body.appendChild(modal);
  }
  