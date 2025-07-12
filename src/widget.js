import { renderStep1 } from './step1';
import { renderStep2 } from './step2';

export function showWidget() {
  const container = document.createElement('div');
  container.id = 'my-widget';
  document.body.appendChild(container);

  let data = {
    name: '',
    email: '',
    password: ''
  };

  const goToStep2 = (step1Data) => {
    data = { ...data, ...step1Data };
    renderStep2(container, data, () => {
      alert(`Submitted: ${JSON.stringify(data, null, 2)}`);
      container.innerHTML = ''; // clean up
    });
  };

  renderStep1(container, goToStep2);
}
