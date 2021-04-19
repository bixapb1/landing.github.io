$(document).ready(function() {
    $('.carousel').carousel({
        indicators: true,
        fullWidth: true
    });
    $('.collapsible').collapsible();
    $('.reviews').carousel({ indicators: true });
    $('.modal').modal();

    let products = document.querySelectorAll('.product_slider');
    let modalContent = document.querySelector('.modal-content');
    products.forEach((prod) => {
        prod.addEventListener('click', () => {
            let img = prod.querySelector('.product_img').src;
            let title = prod.querySelector('.product_title').innerText;
            let price_old = prod.querySelector('.price_old').innerText;
            let price_new = prod.querySelector('.price_new').innerText;
            let articul = prod.querySelector('.articul').innerText;
            let product_material = prod.querySelector('.product_material').innerText;
            let product_color = prod.querySelector('.product_color').innerText;
            let product_size = prod.querySelector('.product_size').innerText;
            modalContent.innerHTML = `
                <div class="row">

                <div class="col s12 m6">
                    <img class='img_modal' src="${img}" alt="Product">
                    </div>

                <div class="col s12 m6 product_description">
                    <h5 class="product_title">${title}</h5>
                    <div class="articul">${articul}</div>
                    <div class="product_material">${product_material}</div>
                    <div class="product_color">${product_color}</div>
                    <div class="product_size">${product_size}</div>
                    <div class="product_price">
                    <div class="price_old">${price_old}</div>
                    <div class="price_new">${price_new}</div>
                    </div>
                </div>
            
            </div>


            <div class="col s12">
                <form method="post" class="d-flex flex-column w-100" action="">
                    <input placeholder="Имя*" type="text" name="name" required="">
                    <input placeholder="Телефон*" type="text" name="phone" required="">
                    <button class="grey darken-4 waves-effect waves-light btn" type="button">Заказать</button>
                </form>
            </div>
                `
        })
    })

});