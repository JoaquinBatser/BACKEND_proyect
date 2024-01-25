document.addEventListener('DOMContentLoaded', () => {
  var addToCartButtons = document.querySelectorAll('.add-to-cart-button')

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      var productContainer = button.closest('.product-container')
      var productId = productContainer.querySelector('small').id

      addToCart(productId)
    })
  })
})

function addToCart(productId) {
  console.log('here')
  console.log(typeof productId)

  fetch(`/api/carts/65b27a5ef507d3cef38a6589/product/${productId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productId }),
  })
}
