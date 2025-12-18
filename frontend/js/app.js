import { initUI } from './ui.js';
import { navigateTo } from './router.js';

document.addEventListener('DOMContentLoaded', (e) => {
  // Only global function allowed: DOMContentLoaded handler
  initUI();
  navigateTo('dashboard');
});
