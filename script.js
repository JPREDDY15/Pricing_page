document.addEventListener('DOMContentLoaded', function() {
  const currencySelect = document.getElementById('currency');
  const unitSelect = document.getElementById('unit');
  const pricingCards = document.querySelectorAll('.card');

  function updatePrices() {
    const currencySymbol = currencySelect.value;
    const unit = unitSelect.value;

    pricingCards.forEach(card => {
      const monthlyPrice = card.getAttribute('data-monthly-price');
      const yearlyPrice = card.getAttribute('data-yearly-price');
      const priceElement = card.querySelector('.price');

      if (unit === '/year') {
        priceElement.textContent = `${currencySymbol}${yearlyPrice}${unit}`;
      } else {
        priceElement.textContent = `${currencySymbol}${monthlyPrice}${unit}`;
      } 
    });
  }

  currencySelect.addEventListener('change', updatePrices);
  unitSelect.addEventListener('change', updatePrices);

  updatePrices(); // Initial update to set prices correctly on page load
});
