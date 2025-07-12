export function renderStep1(container, onNext) {
    container.innerHTML = `
      <div class="widget-box">
        <h3>Step 1: Info</h3>
        <input placeholder="Name" id="name" />
        <input placeholder="Email" id="email" />
        <button id="nextBtn">Next</button>
      </div>
    `;
  
    document.getElementById('nextBtn').onclick = () => {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      if (!name || !email) {
        alert('Fill both fields');
        return;
      }
      onNext({ name, email });
    };
  }
  