

function loadData() {
  let xml = new XMLHttpRequest();
  let url = "products.json";
  xml.open('GET', url);
  xml.onreadystatechange = function() {
    if (xml.readyState === 4 && xml.status === 200) {
      createProductsData(JSON.parse(xml.responseText));
      
    }
  }
  xml.send();
};
loadData();



let products = document.querySelector('.products');
let templateProducts = ``;

function createProductsData(data) {
  
 let dbProducts = data;

 for (let i = 0; i < dbProducts.length; i++) {    // Display every 2nd image
    const user = dbProducts[i];
    templateProducts +=`
    <div class="product-card col-lg-3 col-md-6 mb-4">
      <div class="card m-auto img-thumbnail">
        <img class="myImg product-card-img image-link gallery-img" src="./images/products/${user.imgSrc}.jpg" alt="${user.productTitle}: ${user.model} <br> cena: ${user.price} RSD">
        <div class="card-body">
          <h5>${user.productTitle} : </h5>
          <h4>${user.model} </h4>
          <h5>cena: ${user.price} RSD<h5>
        </div>
      </div>
    </div>
    `
  };
  products.innerHTML = templateProducts;  
  

  function enlargeImage() {
    document.getElementById("product-image").src = this.src;
    document.getElementById("product-title").innerHTML = this.alt;
    document.getElementById('myModal').style.display = "block";
  }
  
  (function() {
    var images = document.getElementsByClassName("myImg");
    for (i = 0; i < images.length; i++) {
      images[i].onclick = enlargeImage;
    }
  })();

  var modal = document.querySelector("#myModal");
  var img = document.querySelector(".myImg");
  var modalImg = document.querySelector(".modal-image");
  var productTitle = document.querySelector("#product-title");
  
  img.addEventListener('click', openModal);
  
  function openModal(){
    modal.style.display = "block";
    modalImg.src = this.src;
    productTitle.innerHTML = this.alt;
  }

  
  var span = document.getElementsByClassName("close")[0];
  
  span.addEventListener('click', closeModal);

  function closeModal() {
    modal.style.display = "none";
  }


  window.addEventListener('click', outsideClick);

  function outsideClick(e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }
  
};
