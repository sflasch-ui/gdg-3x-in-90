// ============ ACCORDION ============
function toggleAccordion(id) {
  const item = document.getElementById(id);
  if (!item) return;
  item.classList.toggle('open');
}

// ============ TAB NAVIGATION ============
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    tabPanels.forEach(panel => {
      panel.classList.remove('active');
      if (panel.id === `tab-${target}`) {
        panel.classList.add('active');
      }
    });

    document.querySelector('.tab-content-area').scrollIntoView({
      behavior: 'smooth', block: 'start'
    });
  });
});

// ============ VIEW TOGGLE (Summary / Detail) ============
const viewBtns = document.querySelectorAll('.view-btn');

// Set default view
document.body.setAttribute('data-view', 'summary');

viewBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const view = btn.dataset.view;

    viewBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.body.setAttribute('data-view', view);
  });
});
