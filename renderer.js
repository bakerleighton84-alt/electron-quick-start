

const status = document.getElementById('status');

const info = window.volt.getInfo();

status.textContent = `Welcome to ${info.name} | Version ${info.version}`;

document.getElementById('launch').addEventListener('click', () => {
  status.textContent = 'Game launching is not configured yet.';
});
