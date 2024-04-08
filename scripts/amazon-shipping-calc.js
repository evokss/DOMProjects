function calculateCostKeydown(event) {
    if (event.key === 'Enter') calculateCost();
}

function calculateCost () {
    const inputElement = document.querySelector('.js-input-element');
    let cost = Number(inputElement.value);

    document.querySelector('.js-total-cost')
      .innerHTML = '';
    document.querySelector('.js-error-message')
      .innerHTML = '';

    if (cost < 0) {
      document.querySelector('.js-error-message')
        .innerText = 'Error: cost cannot be less than $0';
        return
    } 
      
    if (cost <= 40) cost += 10;
    
    document.querySelector('.js-total-cost')
      .innerText = `$${cost}`;
}