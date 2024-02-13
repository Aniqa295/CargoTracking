const trackButton = document.getElementById('trackButton');
function toggleMenu() {
    var mobileMenu = document.getElementById('mobileMenu');
	var mainContent = document.getElementById('mainContent')
    mobileMenu.classList.toggle('show');
	mainContent.classList.toggle('hide');
}
trackButton.addEventListener('click', () => {
  // Prevent default form submission behavior
  event.preventDefault();

  // Redirect to http://mypage.com after a short delay (optional)
  setTimeout(() => {
    window.location.href = 'https://bluebox-systems.com/';
  }, 500);
});

const inputField = document.getElementById('airwaybill');

        inputField.addEventListener('focus', () => {
            // Clear placeholder text on focus
            inputField.placeholder = '';
        });

        inputField.addEventListener('blur', () => {
            // Restore placeholder text if field is empty
            if (!inputField.value) {
                inputField.placeholder = 'AWB number';
            }
        });
		

