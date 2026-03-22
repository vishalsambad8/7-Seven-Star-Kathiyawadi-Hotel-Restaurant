function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('visible');
    }, 50);
    setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

const reservationForm = document.getElementById('reservationForm');
if (reservationForm) {
    reservationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const form = event.currentTarget;
        const name = form.name.value.trim();
        const date = form.date.value;
        const time = form.time.value;
        const party = form.party.value;

        if (!name || !date || !time || !party) {
            showToast('Please fill in all fields to reserve.');
            return;
        }

        showToast(`Thanks ${name}! Your reservation for ${party} on ${date} at ${time} is confirmed.`);
        form.reset();
    });
}

const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = newsletterForm.email.value.trim();
        if (!email) {
            showToast('Please enter a valid email.');
            return;
        }
        showToast('Subscribed! You will hear from us soon.');
        newsletterForm.reset();
    });
}
