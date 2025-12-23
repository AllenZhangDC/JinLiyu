document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Animate hamburger to X
            const bars = mobileMenuBtn.querySelectorAll('.bar');
            // Simple toggle logic for visual feedback could go here if CSS supported it directly,
            // but standard slide-down is implemented in CSS.
        });
    }

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 44, 62, 0.95)';
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.style.background = 'rgba(15, 44, 62, 0.85)';
            navbar.style.padding = '1rem 0';
        }
    });

    // --- Zip Code Checker Logic ---
    const checkBtn = document.getElementById('check-btn');
    const zipInput = document.getElementById('zip-code');
    const resultDiv = document.getElementById('check-result');

    // List of "1 hour radius" zip codes (Mock Data for Lemoyne, PA area)
    const validZipCodes = [
        '17043', // Lemoyne
        '17011', // Camp Hill
        '17012', // Camp Hill
        '17101', '17102', '17103', '17104', // Harrisburg
        '17025', // Enola
        '17050', // Mechanicsburg
        '17055', // Mechanicsburg
        '17070', // New Cumberland
        '17339', // Etters
        '17019', // Dillsburg
        '17033', // Hershey
        '17036'  // Hummelstown
    ];

    if (checkBtn && zipInput) {
        checkBtn.addEventListener('click', validateZip);
        
        // Allow "Enter" key to trigger check
        zipInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                validateZip();
            }
        });
    }

    function validateZip() {
        const zip = zipInput.value.trim();
        
        if (!zip) {
            resultDiv.innerHTML = '<span class="result-fail">Please enter a valid Zip Code.</span>';
            return;
        }

        if (!/^\d{5}$/.test(zip)) {
            resultDiv.innerHTML = '<span class="result-fail">Invalid format. Please enter a 5-digit Zip Code.</span>';
            return;
        }

        if (validZipCodes.includes(zip)) {
            resultDiv.innerHTML = `<span class="result-success"><i class="fa-solid fa-check-circle"></i> Great News! We service the ${zip} area.</span>`;
            // Optional: Shake animation or highlight
        } else {
            // "Fuzzy" check for demo purposes (e.g. any 170xx is "Maybe" or just strict check)
            // Let's stick to strict check for "Premium" feel consistency.
            resultDiv.innerHTML = `<span class="result-fail"><i class="fa-solid fa-circle-xmark"></i> Sorry, ${zip} is currently outside our standard service area. Please contact us directly to confirm.</span>`;
        }
    }

});

    // --- Language Switcher Logic (Simple Toggle) ---
    const langToggle = document.getElementById('lang-toggle');
    const currentLangSpan = document.getElementById('current-lang');
    let isEnglish = true;

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            isEnglish = !isEnglish;
            if (isEnglish) {
                currentLangSpan.textContent = 'EN';
                // Logic to switch content to English would go here
                // For demo purposes, we will just alert or log
                console.log('Switched to English');
            } else {
                currentLangSpan.textContent = 'CN';
                // Logic to switch content to Chinese would go here
                console.log('Switched to Chinese');
                alert('Chinese language translation coming soon!'); 
            }
        });
    }

    // --- 10-Day Rule Modal Logic ---
    const modal = document.getElementById("modal-rule");
    // Select all buttons that trigger the shop action (including the one in nav if we want, but mainly Hero)
    const shopTriggers = document.querySelectorAll(".shop-trigger"); 
    const spanClose = document.getElementsByClassName("close-modal")[0];
    const btnPromise = document.getElementById("btn-promise");

    if (modal) {
        shopTriggers.forEach(trigger => {
            trigger.addEventListener("click", (e) => {
                e.preventDefault(); // Stop jump for now
                modal.style.display = "block";
            });
        });

        // Close on X
        if (spanClose) {
            spanClose.onclick = function() {
                modal.style.display = "none";
            }
        }

        // Close on Click Outside
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // Promise Button Action
        if (btnPromise) {
            btnPromise.addEventListener("click", () => {
                modal.style.display = "none";
                // Smooth scroll to Shop section
                document.querySelector("#shop").scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
    }
    
    // --- Updated Zip Code Success Message ---
    // We override original logic if specific IDs are present (they are) based on previous script
    // Note: The previous logic is inside DOMContentLoaded, appending new logic adheres to it.
    // However, to ensure we overwrite the specific message content, we can re-attach event listener
    // or just rely on the fact that the previous script is simple.
    // Actually, let's just make sure the  update reflects the "White Glove" text.
    // Since I cannot easily edit the middle of the previous JS block without complex regex, 
    // I will attach a NEW event listener that runs AFTER the first one (if not stopped propagation),
    // but the cleanest way is actually to replace the text if the *User* requested a specific change in behavior.
    
    // For simplicity and robustness in this "append" workflow:
    // I will re-implement the check logic here to overwrite the message.
    
    const reCheckBtn = document.getElementById('check-btn');
    if (reCheckBtn) {
        // Remove old listener is hard without reference, but we can just add a new one that updates the DOM *after* 
        // the old one. JS event loop allows this.
        reCheckBtn.addEventListener('click', () => {
           const zip = document.getElementById('zip-code').value.trim();
           const resultDiv = document.getElementById('check-result');
           // Re-run validation for the custom message
           const validZipCodes = [
                '17043', '17011', '17012', '17101', '17102', '17103', '17104', 
                '17025', '17050', '17055', '17070', '17339', '17019', '17033', '17036'
           ];
           
           // Slight delay to override the first script's output
           setTimeout(() => {
               if (validZipCodes.includes(zip)) {
                   resultDiv.innerHTML = `<span class="result-success" style="color:#00b894; font-weight:700;"><i class="fa-solid fa-star"></i> Congratulations! You are within our 1-Hour White Glove Service Range!</span>`;
               }
           }, 10);
        });
    }

