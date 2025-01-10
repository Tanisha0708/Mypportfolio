// Skills Navigation
document.addEventListener('DOMContentLoaded', () => {
    const skillBtns = document.querySelectorAll('.skill-nav-btn');
    const skillSections = document.querySelectorAll('.skill-section');

    // Add random delays to skill items
    document.querySelectorAll('.skill-item, .skill-tag').forEach(item => {
        item.style.setProperty('--delay', Math.random() * 5);
    });

    function showSkillSection(skillType) {
        skillSections.forEach(section => {
            section.classList.remove('active');
            if (section.classList.contains(`${skillType}-skills`)) {
                section.classList.add('active');
                // Randomize positions of items in the active section
                const items = section.querySelectorAll('.skill-item, .skill-tag');
                items.forEach(item => {
                    item.style.setProperty('--delay', Math.random() * 5);
                });
            }
        });
    }

    skillBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            skillBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            showSkillSection(btn.dataset.skill);
        });
    });

    // Show technical skills by default
    showSkillSection('technical');

    // Add intersection observer for skills section
    const skillsSection = document.querySelector('#skills');
    const skillsNav = document.querySelector('.skills-nav');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillsNav.classList.add('visible');
            } else {
                skillsNav.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.2 // Show nav when 20% of skills section is visible
    });

    observer.observe(skillsSection);

    // Handle dropdown navigation
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const skillType = link.dataset.skill;
            document.querySelector(`#skills`).scrollIntoView({ behavior: 'smooth' });
            showSkillSection(skillType);
            document.querySelectorAll('.skill-nav-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.skill === skillType);
            });
        });
    });

    // Project card flip animation
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            if (!card.classList.contains('flipping')) {
                card.classList.add('flipping');
                setTimeout(() => {
                    card.classList.remove('flipping');
                }, 1000);
            }
        });
    });
});

// Typing Animation
document.addEventListener('DOMContentLoaded', function() {
    const typedTextSpan = document.querySelector('.typed-text');
    const texts = ['Tanisha', 'Developer', 'Cybersecurity Enthusiast'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delayEnd = 1000; // Reduced to 1 second delay

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextSpan.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;  // Faster typing and deleting speed

        if (!isDeleting && charIndex === currentText.length) {
            // Delay at the end of word
            typeSpeed = delayEnd;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}); 