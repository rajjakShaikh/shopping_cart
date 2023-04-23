const cartItems = [
	{
		name: "Arduino Rev3",
		quantity: 1,
		price: 1500,
		image: "https://th.bing.com/th/id/OIP.MnEVMzPNkkhmgLGYnHJXzwHaEg?pid=ImgDet&rs=1"
	},
  {
		name: "Arduino Uno R3",
		quantity: 1,
		price: 600,
		image: "https://www.electromaker.io/uploads/images/blog/thumb/microbit.jpg"
	},
	{
		name: "Arduino Uno R3",
		quantity: 1,
		price: 600,
		image: "https://store-cdn.arduino.cc/usa/catalog/product/cache/1/image/1000x750/f8876a31b63532bbba4e781c30024a0a/a/0/a000066_front_3.jpg"
	},
 
];

const cartList = document.getElementById("cart-items");
const checkoutSection = document.querySelector(".checkout");
const confirmationSection = document.querySelector(".confirmation");
const checkoutForm = document.getElementById("checkout-form");
const errorMessage = document.getElementById("error-message");

cartItems.forEach((item, index) => {
	const li = document.createElement("li");
	li.innerHTML = `
		<img src="${item.image}" alt="${item.name}">
		<div>
			<h3>${item.name}</h3>
			<p>Quantity: <input type="number" class="item-quantity" value="${item.quantity}" data-index="${index}" min="1"></p>
			<p>Price: $${item.price}</p>
			<button class="delete-item" data-index="${index}">Delete</button>
		</div>
	`;
	cartList.appendChild(li);
});

cartList.addEventListener("change", event => {
	if (event.target.matches(".item-quantity")) {
		const index = event.target.dataset.index;
		const quantity = parseInt(event.target.value);
		cartItems[index].quantity = quantity;
	}
});

cartList.addEventListener("click", event => {
	if (event.target.matches(".delete-item")) {
		const index = event.target.dataset.index;
		cartItems.splice(index, 1);
		event.target.closest("li").remove();
	}
});

document.getElementById("checkout-btn").addEventListener("click", () => {
	checkoutSection.style.display = "block";
});

checkoutForm.addEventListener("submit", event => {
	event.preventDefault();
	const cardNumber = document.getElementById("card-number").value;
	const expirationDate = document.getElementById("expiration-date").value;
	const cvv = document.getElementById("cvv").value;
	
	if (cardNumber && expirationDate && cvv) {
		checkoutSection.style.display = "none";
		confirmationSection.style.display = "block";
	} else {
		alert("Please enter valid credit card details!")
		errorMessage.textContent = "Please enter valid credit card details!";
	}
  });