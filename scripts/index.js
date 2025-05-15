const URL = `https://api.pw.wintpay.com/api/v1/store/get-products-by-store/12`;

(function fetchData(){
    const container = document.getElementById('products-render-container');

    document.addEventListener('DOMContentLoaded', () => {
        fetch(URL)
          .then(response => {
            if (!response.ok) {
              throw new Error("Failed to fetch data");
            }
            return response.json();
          })
          .then(data => {
            container.innerHTML = '';
  
            data.data.forEach(item => {
              const card = `
              <div class="border border-gray-200 rounded-md group hover:shadow-md transition duration-200">
                    <div class="relative">
                    <img class="w-full h-82 object-cover rounded-t-md" src="${item.image}" alt="${item.product_name}">

                    <button class="absolute top-2 right-2 hidden group-hover:flex items-center justify-center w-8 h-8 border border-gray-300 bg-white rounded-full hover:border-red-500 hover:text-red-500 transition">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                    </button>
                    </div>

                    <div class="p-4">
                    <h2 class="font-bold">${item.product_name.slice(0, 25) + '…' }</h2>
                    <p class="text-sm text-gray-600">${item.description.slice(0, 50) + '...'}</p>
                    <p class="font-bold text-sm mt-1">
                        $${item.price}  <span class="ml-1 line-through text-gray-400">$${item.price + 10}</span>
                    </p>
                    </div>
                </div>
              `;
              container.insertAdjacentHTML('beforeend', card);
            });
          })
          .catch(error => {
            console.error('Error fetching wishlist:', error);
          });
      });

})();