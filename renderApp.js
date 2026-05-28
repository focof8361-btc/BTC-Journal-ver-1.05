
export function renderLogs(container, logs) {
  container.innerHTML = '';

  const fragment = document.createDocumentFragment();

  logs.forEach(log => {
    const card = document.createElement('div');

    card.className = 'journal-card';

    card.innerHTML = `
      <h4>${log.bias}</h4>
      <p>${log.date}</p>
    `;

    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}
