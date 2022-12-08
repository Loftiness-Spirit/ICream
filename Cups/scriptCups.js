(function (){
    const appDiv = "cups";

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
        const link1 = createLink('Пломбир классический Золотой Стандарт', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2783132/bcf7f587-6976-4514-aa49-54ef34271547/230x230-webp" alt="">'+
        '<h4>79 ₽</h4>'+
        '<h2>Пломбир классический Золотой Стандарт</h2>'+
        '<span>86 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/cup1');
        const link2 = createLink('Пломбир с черникой Золотой Стандарт', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2791769/61e15873-181a-456f-b51d-08b71fe4b806/230x230-webp" alt="">'+
        '<h4>79 ₽</h4>'+
        '<h2>Пломбир с черникой Золотой Стандарт</h2>'+
        '<span>89 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/cup2');
        const link3 = createLink('Пломбир шоколадный и брауни Золотой стандарт', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2756334/ccf3d9f4-d708-4746-aa61-be168968253f/230x230-webp" alt="">'+
        '<h4>99 ₽</h4>'+
        '<h2>Пломбир шоколадный и брауни Золотой стандарт</h2>'+
        '<span>86 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/cup3');
        const link4 = createLink('Пломбир крем-брюле и печенье Золотой стандарт', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2805921/45a04397-204d-4d5b-aff8-78790ca1546a/230x230-webp" alt="">'+
        '<h4>99 ₽</h4>'+
        '<h2>Пломбир крем-брюле и печенье Золотой стандарт</h2>'+
        '<span>86 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/cup4');

        const link5 = createLink('Пломбир фисташковый Золотой стандарт', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2783132/4e1b945a-6804-427b-ad5e-931d4cc0f1bf/230x230-webp" alt="">'+
        '<h4>79 ₽</h4>'+
        '<h2>Пломбир фисташковый Золотой стандарт</h2>'+
        '<span>86 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/cup5');
        const link6 = createLink('Пломбир ванильный Коровка из Кореновки', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2756334/87366843-4249-48de-a8b7-2e810c7fa240/230x230-webp" alt="">'+
        '<h4>85 ₽</h4>'+
        '<h2>Пломбир ванильный Коровка из Кореновки</h2>'+
        '<span>100 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/cup6');

        const link7= createLink('Пломбир шоколадный Коровка из Кореновки', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2805921/6668e1b7-9f0d-4bb2-bb11-1179ab34de24/230x230-webp" alt="">'+
        '<h4>85 ₽</h4>'+
        '<h2>Пломбир шоколадный Коровка из Кореновки</h2>'+
        '<span>100 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/cup7');
        const link8 = createLink('Пломбир крем-брюле Коровка из Кореновки', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2805921/98aeda20-ca7e-4083-871c-206e07e76436/230x230-webp" alt="">'+
        '<h4>85 ₽</h4>'+
        '<h2>Пломбир крем-брюле Коровка из Кореновки</h2>'+
        '<span>100 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/cup8');


        myDiv.appendChild(link1);
        myDiv.appendChild(link2);
        myDiv.appendChild(link3);
        myDiv.appendChild(link4);
        myDiv.appendChild(link5);
        myDiv.appendChild(link6);
        myDiv.appendChild(link7);        
        return myDiv.appendChild(link8);
    });

    template('cup1', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('cup1', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Пломбир классический Золотой Стандарт</h1>"+
        '<span>86 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2783132/bcf7f587-6976-4514-aa49-54ef34271547/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Молоко цельное, масло сливочное (В) или молочный жир (F), сахар, вафельный стаканчик (мука пшеничная, стабилизатор модифицированный крахмал, масло подсолнечное, эмульгатор лецитин соевый, соль поваренная, сода пищевая, натуральный пищевой краситель аннато), глазурь жировая какао содержащая (сахар, кокосовое масло, пальмовое масло, какао-порошок, эмульгатор соевый лецитин, натуральный ароматизатор ванили), сироп глюкозы, вода, молоко сухое обезжиренное, крахмал картофельный, сыворотка сухая подсырная, эмульгатор (моно- и диглицериды жирных кислот), натуральный ароматизатор сливок.'+
        '</p>'+
        '<div class="buy">'+
        '<h2>79 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
        return myDiv.appendChild(link1);
    });

    template('cup2', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('cup2', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Пломбир с черникой Золотой Стандарт</h1>"+
        '<span>89 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2791769/61e15873-181a-456f-b51d-08b71fe4b806/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Мороженое (молоко цельное, масло сливочное (B) или молочный жир (F), сахар, сироп глюкозы, молоко сухое, вода, сливки, крахмал картофельный, эмульгатор моно- и диглицериды жирных кислот, натуральный ароматизатор сливок), черничный наполнитель (сахар, вода, черничное пюре, загуститель пектин, натуральный ароматизатор черники, регулятор кислотности лимонная кислота), вафельный стаканчик (мука пшеничная, пшеничный крахмал, растительное масло, эмульгатор лецитин, соль поваренная, разрыхлитель гидрокарбонат натрия (сода пищевая), краситель аннато), глазурь (кокосовое масло, сахар, какао-порошок, эмульгатор лецитин, натуральный ароматизатор ванили).'+
        '</p>'+
        '<div class="buy">'+
        '<h2>79 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
        return myDiv.appendChild(link1);
    });
    template('cup3', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('cup3', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Пломбир шоколадный и брауни Золотой стандарт</h1>"+
        '<span>86 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2756334/ccf3d9f4-d708-4746-aa61-be168968253f/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Мороженое (молоко цельное, масло сливочное (B) или молочный жир (F), сахар, сироп глюкозы, вода, молоко сухое, какао-порошок, сыворотка сука, крахмал картофельный, цитрусовые волокна, эмульгатор моно-и диглицериды жирных кислот), вафельный стаканчик (мука пшеничная, пшеничный крахмал, какао-порошок, краситель сахарный колер III, растительное масло, эмульгатор лецитин, соль, разрыхлитель гидрокарбонат натрия (сода пищевая) ), бисквитное печенье (мука пшеничная, сахар, растительные масла (пальмовое и расовое масла), какао-порошок, соль, разрыхлитель гидрокарбонат натрия (сода пищевая), ароматизатор шоколадный), глазурь (кокосовое масло, сахар, какао-порошок, эмульгатор лецитин, натуральный ароматизатор ванили.'+
        '</p>'+
        '<div class="buy">'+
        '<h2>99 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
        return myDiv.appendChild(link1);
    });

    template('cup4', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('cup4', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Пломбир крем-брюле и печенье Золотой стандарт</h1>"+
        '<span>86 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2805921/45a04397-204d-4d5b-aff8-78790ca1546a/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Мороженое (молоко цельное, сироп крем-брюле (сахар, молоко цельное сгущённое с сахаром (молоко цельное, молоко обезжиренное, сахара (сахароза, лактоза)), масло сливочное (B) или молочный жир (F), вода, сироп глюкозы, молоко сухое, сыворотка сухая, сахар, крахмал картофельный, цитрусовые волокна, эмульгатор моно- и диглицериды жирных кислот, краситель сахарный колер III), вафельный стаканчик (мука пшеничная, пшеничный крахмал, растительное масло, эмульгатор лецитин, соль, разрыхлитель гидрокарбонат натрия (сода пищевая), краситель аннато), соленое печенье (мука пшеничная, сыворотка, растительное масло, сахар, соль, молоко сухое цельное, разрыхлители (гидрокарбонат натрия (сода пищевая), гидрокарбонат аммония), дрожжи хлебопекарные, эмульгатор соевый лецитин, экстракт солода), глазурь «Со вкусом карамели» (пальмоядровое масло, сахар, молоко сухое, сыворотка сухая, какао-порошок, соль, эмульгатор лецитин, красители (аннато, красный свекольный), ароматизатор натуральный карамели).'+
        '</p>'+
        '<div class="buy">'+
        '<h2>99 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
        return myDiv.appendChild(link1);
    });
    template('cup5', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('cup5', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Пломбир фисташковый Золотой стандарт</h1>"+
        '<span>86 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2783132/4e1b945a-6804-427b-ad5e-931d4cc0f1bf/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Цельное молоко, масло сливочное (В) или молочный жир (F), сахар, сироп глюкозы, вафельный стаканчик (мука пшеничная, стабилизатор модифицированный крахмал, растительное масло, эмульгатор соевый лецитин, соль поваренная, разрыхлитель гидрокарбонат натрия (пищевая сода), натуральный пищевой краситель аннато), глазурь жировая какао содержащая (растительное масло, сахар какао-порошок, эмульгатор соевый лецитин, натуральный ароматизатор ванили), вода, молоко сухое, крахмал картофельный, сыворотка сухая подсырная, эмульгатор моно- и диглицериды жирных кислот натуральные пищевые красители (аннато, лайм зеленый натуральный ароматизатор фисташки.'+
        '</p>'+
        '<div class="buy">'+
        '<h2>79 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
        return myDiv.appendChild(link1);
    });

    template('cup6', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('cup6', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Пломбир ванильный Коровка из Кореновки</h1>"+
        '<span>100 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2756334/87366843-4249-48de-a8b7-2e810c7fa240/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Сливки, молоко цельное сгущенное с сахаром, сахар, вафельный стаканчик (мука пшеничная хлебопекарная, масло растительное подсолнечное, сахар, соль поваренная пищевая, разрыхлитель сода пищевая) смесь пищевых эмульгаторов и стабилизаторов (эмульгатор: моно- и диглицериды жирных кислот, стабилизаторы: камедь рожкового дерева, гуаровая камедь, каррагинан), ароматизатор ванилин.'+
        '</p>'+
        '<div class="buy">'+
        '<h2>85 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
        return myDiv.appendChild(link1);
    });
    template('cup7', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('cup7', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Пломбир шоколадный Коровка из Кореновки</h1>"+
        '<span>100 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2805921/6668e1b7-9f0d-4bb2-bb11-1179ab34de24/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Сливки, сахар, вафельный стакан (мука пшеничная хлебопекарная, масло растительное, сахар-песок, соль поваренная пищевая, сода пищевая), молоко цельное сгущённое с сахаром, какао-порошок, стабилизатор «Кремодан» (стабилизаторы: моно- и диглицериды жирных кислот, камедь рожкового дерева, гуаровая камедь, каррагинан).'+
        '</p>'+
        '<div class="buy">'+
        '<h2>85 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
        return myDiv.appendChild(link1);
    });

    template('cup8', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('cup8', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Пломбир крем-брюле Коровка из Кореновки</h1>"+
        '<span>100 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2805921/98aeda20-ca7e-4083-871c-206e07e76436/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Сливки, сироп крем-брюле (молоко цельное сгущенное с сахаром, сахар), молоко концентрированное обезжиренное, сахар, вафельный стаканчик (мука пшеничная хлебопекарная, крахмал кукурузный, масло кокосовое рафинированное дезодорированное, эмульгатор соевый, лецитин, сахар, соль пищевая, разрыхлитель: гидрокарбонат натрия (сода пищевая), вода питьевая), масло сливочное, смесь пищевых эмульгаторов и стабилизаторов (эмульгатор: моно- и диглицериды жирных кислот, стабилизаторы: камедь рожкового дерева, гуаровая камедь, каррагинан).'+
        '</p>'+
        '<div class="buy">'+
        '<h2>85 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
    return myDiv.appendChild(link1);
});

    // Define the mappings route->template.
    route('/', 'main');
    route('/cup1', 'cup1');
    route('/cup2', 'cup2');
    route('/cup3', 'cup3');
    route('/cup4', 'cup4');
    route('/cup5', 'cup5');
    route('/cup6', 'cup6');
    route('/cup7', 'cup7');
    route('/cup8', 'cup8');

    // For first load or when routes are changed in browser url box.
    window.addEventListener('load', router);
    window.addEventListener('hashchange', router);

})()