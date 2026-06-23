// 1. मोबाइल आइकन और नवबार लिस्ट (ul) को सेलेक्ट करना
const menuIcon = document.querySelector('.bi-list-nested');
const navList = document.querySelector('#main-nav ul');

// 2. आइकन पर क्लिक होने पर काम करने वाला फंक्शन
menuIcon.addEventListener('click', () => {
  // यह 'active' क्लास को ul पर चालू या बंद (Toggle) करेगा
  navList.classList.toggle('active');
});