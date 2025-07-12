export function showWidget() {
    const existing = document.getElementById('my-widget-box');
    if (existing) return;
  
    const container = document.createElement('div');
    container.id = 'my-widget-box';
    container.innerHTML = `
      <div class="widget-box">
        <h3>Step 1: Name + Email</h3>
        <input placeholder="Name" id="name" />
        <input placeholder="Email" id="email" />
        <button onclick="nextStep()">Next</button>
      </div>
    `;
    document.body.appendChild(container);
  
    window.nextStep = function () {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      container.innerHTML = `
        <div class="widget-box">
          <h3>Step 2: Password</h3>
          <input type="password" placeholder="Password" id="password" />
          <button onclick="submitWidget()">OK</button>
        </div>
      `;
    };
  
    window.submitWidget = function () {
      const pass = document.getElementById('password').value;
      alert('Submitted!');
      container.remove();
    };
  }
  