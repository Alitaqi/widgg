export function renderStep2(container, data, onSubmit) {
    container.innerHTML = `
      <div class="widget-box">
        <h3>Step 2: Password</h3>
        <input placeholder="Password" type="password" id="password" />
        <button id="okBtn">OK</button>
      </div>
    `;
  
    document.getElementById('okBtn').onclick = () => {
      const password = document.getElementById('password').value;
      if (!password) {
        alert('Enter password');
        return;
      }
      data.password = password;
      onSubmit();
    };
  }
  