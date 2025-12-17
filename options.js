const saveOptions = () => {
  const username = document.getElementById('username').value;
  chrome.storage.sync.set(
    { githubUsername: username },
    () => {
      const status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(() => {
        status.textContent = '';
      }, 750);
    }
  );
};

const restoreOptions = () => {
  chrome.storage.sync.get(
    { githubUsername: '' },
    (items) => {
      document.getElementById('username').value = items.githubUsername;
    }
  );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
