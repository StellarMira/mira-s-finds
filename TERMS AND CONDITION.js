document.addEventListener('DOMContentLoaded', function() {
    var userAgrees = sessionStorage.getItem('userAgreedToTerms');
    if (userAgrees) {
        document.getElementById('content').style.display = 'block';
    } else {
        showTermsAndConditions();
    }
});

function showTermsAndConditions() {
    var terms = "Welcome to Mira's Vintage Finds!designed for your personal,non-commercial enjoyment. By engaging with our site, you agree to provide accurate information for account creation, understand our efforts to maintain accurate listings, and acknowledge that all sales are subject to availability with payment processed securely. Please familiarize yourself with our shipping and returns policy, ensuring any returns meet our conditions as outlined.Our Terms, including changes to policies and operations, are governed by applicable laws, with all site content protected under copyright laws. Your privacy is paramount, as detailed in our Privacy Policy. For any queries or if there are aspects of the Terms you wish to discuss, reach out to us at support@mirasvintagefinds.com. Your use of the site signifies acceptance of these Terms; if they do not align with your expectations, we advise against using our services.";
    var userChoice = confirm(terms + "\n\nDo you agree to these terms and conditions?");
    
    if (userChoice) {
        sessionStorage.setItem('userAgreedToTerms', true);
        document.getElementById('content').style.display = 'block';
    } else {
        alert("You need to agree to the terms and conditions to use this website.");
        window.location = 'HOME PAGE.html';
    }
}