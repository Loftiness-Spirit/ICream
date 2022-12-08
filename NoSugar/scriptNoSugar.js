(function (){
    const appDiv = "noSugar";

    // Both set of different routes and template generation functions
    let routes = {};
    let templates = {};

    // Generate DOM tree from a string
    let createDiv = (id, xmlString) => {
        let d = document.createElement('div');
        d.id = id;
        d.innerHTML = xmlString;
        return d.firstChild;
    };

    // Register a template (this is to mimic a template engine)
    let template = (name, templateFunction) => {
      return templates[name] = templateFunction;
    };

    // Define the routes. Each route is described with a route path & a template to render
    // when entering that path. A template can be a string (file name), or a function that 
    // will directly create the DOM objects.
    let route = (path, template) => {
        if (typeof template == "function") {
          return routes[path] = template;
        }
        else if (typeof template == "string") {
          return routes[path] = templates[template];
        }
        else {
          return;
        }
    };

    // Give the correspondent route (template) or fail
    let resolveRoute = (route) => {
        try {
         return routes[route];
        } catch (error) {
            throw new Error("The route is not defined");
        }
    };

    // The actual router, get the current URL and generate the corresponding template
    let router = (evt) => {
        const url = window.location.hash.slice(1) || "/";
        const routeResolved = resolveRoute(url);
        routeResolved();
    };

    // Helper function to create a link.
    let createLink = (title, html, href) => {
        let a = document.createElement('a');        
        a.innerHTML = html;
        a.title = title;
        a.href = href;
        return a;
    };

    // Register the templates.
    template('main', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "grid";
        const link1 = createLink('Сорбет My Gelato малина без сахара', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2756334/dbcaa302-eb60-4ee4-8129-d949eb2c6bda/230x230-webp" alt="">'+
        '<h4>199 ₽</h4>'+
        '<h2>Сорбет My Gelato малина без сахара</h2>'+
        '<span>90 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/nosugar1');
        const link2 = createLink('Мороженое протеиновое АйсКро банан', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2756334/bf68f0f0-4aba-4a7d-816c-6fa71cb83db6/230x230-webp" alt="">'+
        '<h4>119 ₽</h4>'+
        '<h2>Мороженое протеиновое АйсКро банан</h2>'+
        '<span>75 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/nosugar2');
        const link3 = createLink('Мороженое протеиновое Мятная тыква АйсКро', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2756334/0af68b38-6482-4049-9405-554f850e5db9/230x230-webp" alt="">'+
        '<h4>109 ₽</h4>'+
        '<h2>Мороженое протеиновое Мятная тыква АйсКро</h2>'+
        '<span>75 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/nosugar3');
        const link4 = createLink('Мороженое Манго-Маракуйя АйсКро протеиновое', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2998515/098ecfcc-c7a2-4d21-8049-f88f5927977d/230x230-webp" alt="">'+
        '<h4>119 ₽</h4>'+
        '<h2>Мороженое Манго-Маракуйя АйсКро протеиновое</h2>'+
        '<span>75 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/nosugar4');

        const link5 = createLink('Мороженое протеиновое ванильное O12', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2756334/7fb5e814-612f-4259-9dc9-62fa1e693879/230x230-webp" alt="">'+
        '<h4>179 ₽</h4>'+
        '<h2>Мороженое протеиновое ванильное O12</h2>'+
        '<span>70 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/nosugar5');
        const link6 = createLink('Мороженое протеиновое клубничное O12', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2888787/d446905b-7ae7-4107-ab5b-1b51d44d3eb5/230x230-webp" alt="">'+
        '<h4>179 ₽</h4>'+
        '<h2>Мороженое протеиновое клубничное O12</h2>'+
        '<span>70 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/nosugar6');

        const link7= createLink('Мороженое протеиновое шоколадное O12', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2791769/19cc72fe-11bc-4e3c-8ff4-c6c31cec6f62/230x230-webp" alt="">'+
        '<h4>179 ₽</h4>'+
        '<h2>Мороженое протеиновое шоколадное O12</h2>'+
        '<span>70 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/nosugar7');
        const link8 = createLink('Мороженое протеиновое манго-маракуйя O12', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2783132/b722a15f-798a-4d3d-9728-d043e4a4565d/230x230-webp" alt="">'+
        '<h4>119 ₽</h4>'+
        '<h2>Мороженое протеиновое манго-маракуйя O12</h2>'+
        '<span>70 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/nosugar8');


        myDiv.appendChild(link1);
        myDiv.appendChild(link2);
        myDiv.appendChild(link3);
        myDiv.appendChild(link4);
        myDiv.appendChild(link5);
        myDiv.appendChild(link6);
        myDiv.appendChild(link7);        
        return myDiv.appendChild(link8);
    });

    template('no-sugar1', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('nosugar1', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Сорбет My Gelato малина без сахара</h1>"+
        '<span>90 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2756334/dbcaa302-eb60-4ee4-8129-d949eb2c6bda/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Малина, вода, фруктоза, инулин пищевой, сок лимона, комплексная пищевая добавка: эмульгатор (моно-и диглицериды жирных кислот), камедь рожкового дерева, гуаровая камедь, ксантановая камедь, подсластитель сукралоза. Может содержать следы молока, сои, яиц, орехов, арахиса.'+
        '</p>'+
        '<div class="buy">'+
        '<h2>199 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
        return myDiv.appendChild(link1);
    });

    template('no-sugar2', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('nosugar2', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Сорбет My Gelato малина без сахара</h1>"+
        '<span>90 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2756334/bf68f0f0-4aba-4a7d-816c-6fa71cb83db6/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Бананы, изолят сывороточного белка, молоко обезжиренное, инулин (клетчатка), сливки, подсластитель - эритрит, крахмал тапиоковый, подсластитель - экстракт стевии.'+
        '</p>'+
        '<div class="buy">'+
        '<h2>199 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
        return myDiv.appendChild(link1);
    });
    template('no-sugar3', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('nosugar3', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Мороженое протеиновое Мятная тыква АйсКро</h1>"+
        '<span>75 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2756334/0af68b38-6482-4049-9405-554f850e5db9/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Молоко обезжиренное, изолят сывороточного белка, пюре тыквы, подсластитель эритрит, сливки, инулин (клетчатка), крахмал тапиоковый, семена тыквы, подсластитель — экстракт стевии.'+
        '</p>'+
        '<div class="buy">'+
        '<h2>109 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
        return myDiv.appendChild(link1);
    });

    template('no-sugar4', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('nosugar4', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Мороженое Манго-Маракуйя АйсКро протеиновое</h1>"+
        '<span>75 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2998515/098ecfcc-c7a2-4d21-8049-f88f5927977d/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Пюре манго, изолят сывороточного белка, Молоко обезжиренное, инулин (клетчатка), пюре маракуйи, подсластитель-эритрит, сливки, крахмал тапиоковый, подсластитель- экстракт стевии.'+
        '</p>'+
        '<div class="buy">'+
        '<h2>119 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
        return myDiv.appendChild(link1);
    });
    template('no-sugar5', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('nosugar5', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Мороженое протеиновое ванильное O12</h1>"+
        '<span>70 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2756334/7fb5e814-612f-4259-9dc9-62fa1e693879/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Концентрат сывороточных белков, концентрат молочных белков, сливки, фруктоза, подсластитель — ксилит, вода питьевая, эмульгаторы — моно- и диглицериды жирных кислот, стабилизаторы — камедь рожкового дерева, гуаровая камедь, каррагинан; ваниль натуральная.'+
        '</p>'+
        '<div class="buy">'+
        '<h2>179 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
        return myDiv.appendChild(link1);
    });

    template('no-sugar6', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('nosugar6', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Мороженое протеиновое клубничное O12</h1>"+
        '<span>70 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2888787/d446905b-7ae7-4107-ab5b-1b51d44d3eb5/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Концентрат молочных белков, масло сливочное, фруктоза, клубника сублимированной сушки, сухое обезжиренное молоко, подсластитель — ксилит, вода питьевая, эмульгаторы — моно- и диглицериды жирных кислот, стабилизаторы — камедь рожкового дерева, гуаровая камедь.'+
        '</p>'+
        '<div class="buy">'+
        '<h2>179 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
        return myDiv.appendChild(link1);
    });
    template('no-sugar7', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('nosugar7', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Мороженое протеиновое шоколадное O12</h1>"+
        '<span>70 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2791769/19cc72fe-11bc-4e3c-8ff4-c6c31cec6f62/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Концентрат молочных белков, масло сливочное, фруктоза, какао-порошок, сухое обезжиренное молоко, подсластитель — ксилит, вода питьевая, эмульгаторы — моно- и диглицериды жирных кислот, стабилизаторы — камедь рожкового дерева, гуаровая камедь.'+
        '</p>'+
        '<div class="buy">'+
        '<h2>179 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
        return myDiv.appendChild(link1);
    });

    template('no-sugar8', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('nosugar8', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Мороженое протеиновое манго-маракуйя O12</h1>"+
        '<span>70 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2783132/b722a15f-798a-4d3d-9728-d043e4a4565d/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Концентрат молочных белков, масло сливочное, фруктоза, манго сублимированной сушки, маракуйя сублимированной сушки, сухое обезжиренное молоко, подсластитель — ксилит, вода питьевая, эмульгаторы — моно- и диглицериды жирных кислот, стабилизаторы — камедь рожкового дерева, гуаровая камедь; натуральный ароматизатор, краситель Бета-каротин.'+
        '</p>'+
        '<div class="buy">'+
        '<h2>179 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
        return myDiv.appendChild(link1);
});

    // Define the mappings route->template.
    route('/', 'main');
    route('/nosugar1', 'no-sugar1');
    route('/nosugar2', 'no-sugar2');
    route('/nosugar3', 'no-sugar3');
    route('/nosugar4', 'no-sugar4');
    route('/nosugar5', 'no-sugar5');
    route('/nosugar6', 'no-sugar6');
    route('/nosugar7', 'no-sugar7');
    route('/nosugar8', 'no-sugar8');

    // For first load or when routes are changed in browser url box.
    window.addEventListener('load', router);
    window.addEventListener('hashchange', router);

})()