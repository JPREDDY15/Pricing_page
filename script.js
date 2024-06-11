document.addEventListener('DOMContentLoaded', function() {
  const currencySelect = document.getElementById('currency');
  const unitSelect = document.getElementById('unit');
  const pricingCards = document.querySelectorAll('.card');

  const exchangeRates = {
    USD: 1,
    EUR: 0.84,
    GBP: 0.74,
    INR: 73.57
  };

  function updatePrices() {
    const currencySymbol = currencySelect.options[currencySelect.selectedIndex].dataset.symbol;
    const currencyValue = currencySelect.value;
    const unit = unitSelect.value;
    
    pricingCards.forEach(card => {
      const monthlyPrice = parseFloat(card.getAttribute('data-monthly-price'));
      const yearlyPrice = parseFloat(card.getAttribute('data-yearly-price'));
      const priceElement = card.querySelector('.price');
      
      let convertedPrice;
      if (unit === 'yearly') {
        convertedPrice = yearlyPrice * exchangeRates[currencyValue];
        priceElement.textContent = `${currencySymbol}${convertedPrice.toFixed(2)}/year`;
      } else {
        convertedPrice = monthlyPrice * exchangeRates[currencyValue];
        priceElement.textContent = `${currencySymbol}${convertedPrice.toFixed(2)}/month`;
      }
    });
  }

  currencySelect.addEventListener('change', updatePrices);
  unitSelect.addEventListener('change', updatePrices);

  updatePrices(); // Initial update to set prices correctly on page load
});
