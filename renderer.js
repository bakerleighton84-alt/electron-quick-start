
const status = document.getElementById('status');

const VOLT_OWNER = 'VOLT';

document.addEventListener('DOMContentLoaded', () => {
  status.textContent = `Welcome, ${VOLT_OWNER}. Launcher ready.`;
});

document.getElementById('launch').addEventListener('click', () => {
  status.textContent = 'VOLT is ready. Game launching is not configured yet.';
});
