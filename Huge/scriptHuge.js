(function (){
    const appDiv = "huge";

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
        const link1 = createLink('Мороженое Солёная карамель Double Магнат', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2783132/f4e0e2a8-6ae2-4246-903a-2b74a197b987/230x230-webp" alt="">'+
        '<h4>589 ₽</h4>'+
        '<h2>Мороженое Солёная карамель Double Магнат</h2>'+
        '<span>310 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/nosugar1');
        const link2 = createLink('Мороженое Baskin Robbins Бейсбольный орешек', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2888787/86bb3b66-7c81-423c-b0eb-df2097a1c1fc/230x230-webp" alt="">'+
        '<h4>699 ₽</h4>'+
        '<h2>Мороженое Baskin Robbins Бейсбольный орешек</h2>'+
        '<span>1000 мл</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/nosugar2');
        const link3 = createLink('Мороженое Baskin Robbins малина+протеин', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2998515/b797028e-0ba6-4ade-9b68-b74161f58eda/230x230-webp" alt="">'+
        '<h4>699 ₽</h4>'+
        '<h2>Мороженое Baskin Robbins малина+протеин</h2>'+
        '<span>500 мл</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/nosugar3');
        const link4 = createLink('Мороженое Baskin Robbins Пралине', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2750890/2e011511-1d2e-4e7d-b587-5e554206e828/230x230-webp" alt="">'+
        '<h4>699 ₽</h4>'+
        '<h2>Мороженое Baskin Robbins Пралине</h2>'+
        '<span>1000 мл</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/nosugar4');

        const link5 = createLink('Baskin Robbins миндаль-фисташка', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2756334/94ff67c7-8574-4654-92be-5c6646e57291/230x230-webp" alt="">'+
        '<h4>699 ₽</h4>'+
        '<h2>Baskin Robbins миндаль-фисташка</h2>'+
        '<span>1000 мл</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/nosugar5');
        const link6 = createLink('Мороженое Baskin Robbins сливки с печеньем', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2888787/495421e6-f284-4824-9585-ea17998f1a7d/230x230-webp" alt="">'+
        '<h4>699 ₽</h4>'+
        '<h2>Мороженое Baskin Robbins сливки с печеньем</h2>'+
        '<span>1000 мл</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/nosugar6');

        const link7= createLink('Мороженое Волшебные леденцы Baskin Robbins', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2783132/e88cb558-9ad1-40c9-bd47-1525feb5419f/230x230-webp" alt="">'+
        '<h4>699 ₽</h4>'+
        '<h2>Мороженое Волшебные леденцы Baskin Robbins</h2>'+
        '<span>1000 мл</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/nosugar7');
        const link8 = createLink('Мороженое Фисташка Double Магнат', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2783132/7e18fea4-4f37-45df-97a9-61e80dc62ed8/230x230-webp" alt="">'+
        '<h4>589 ₽</h4>'+
        '<h2>Мороженое Фисташка Double Магнат</h2>'+
        '<span>300 г</span>'+
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
        "<h1>Мороженое Солёная карамель Double Магнат</h1>"+
        '<span>310 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2783132/f4e0e2a8-6ae2-4246-903a-2b74a197b987/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Сливочное ванильное мороженое (сливки, вода, концентрированное обезжиренное молоко, сахар, глюкозно-фруктозный сироп, эмульгатор (моно- и диглицериды жирных кислот), стабилизаторы (гуаровая камедь, камедь рожкового дерева, каррагинан), натуральные ароматизаторы (ваниль, стручковая молотая ваниль), краситель аннато), молочный шоколад (сахар, масло какао, какао тертое, молоко сухое цельное, молочный жир, эмульгаторы (Е476, лецитин), ароматизатор ванилин), соус «Соленая карамель» (глюкозный сироп, вода, глюкозно-фруктозный сироп, сахар, молоко сухое обезжиренное, кокосовое масло, соль морская, эмульгатор (моно- и диглицериды жирных кислот), стабилизатор каррагинан, карамельный сироп (сахар, вода)), карамель (сахар, масло какао, сахарная пудра, кукурузный крахмал, соль, натуральный ароматизатор).'+
        '</p>'+
        '<div class="buy">'+
        '<h2>589 ₽</h2>'+
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
        "<h1>Мороженое Baskin Robbins Бейсбольный орешек</h1>"+
        '<span>1000 мл<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2888787/86bb3b66-7c81-423c-b0eb-df2097a1c1fc/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Сливки, восстановленное обезжиренное молоко, прослойка малиновая (глюкозный сироп, сахарный сироп, пюре чёрной малины, загуститель глицерин (Е422), загуститель альгинат натрия (Е401), ароматизатор малиновый, регулятор кислотности лимонная кислота (Е330), антиокислитель аскорбиновая кислота (Е300)), сахарный сироп, обжаренные орехи кешью (кешью, арахисовое масло, соль), глюкозный сироп, ванильный экстракт, эмульгатор (Е471), стабилизаторы (Е466, Е412, Е407), пищевой краситель (Е160а).'+
        '</p>'+
        '<div class="buy">'+
        '<h2>699 ₽</h2>'+
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
        "<h1>Мороженое Baskin Robbins малина+протеин</h1>"+
        '<span>500 мл<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2998515/b797028e-0ba6-4ade-9b68-b74161f58eda/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Сливки, восстановленное обезжиренное молоко, малиновая прослойка (сахар, малина, загуститель (Е440), ароматизатор малина, сок лимона концентрированный, краситель (Е120)), сахарный сироп, концентрат сывороточного белка, глюкозный сироп, ванильный ароматизатор, эмульгатор (Е471), стабилизаторы (Е466, Е412, Е407).'+
        '</p>'+
        '<div class="buy">'+
        '<h2>699 ₽</h2>'+
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
        "<h1>Мороженое Baskin Robbins Пралине</h1>"+
        '<span>1000 мл<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2750890/2e011511-1d2e-4e7d-b587-5e554206e828/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Сливки, восстановленное обезжиренное молоко, карамельная прослойка (сгущённое молоко (цельное молоко, сахар), сироп глюкозы, сахарный сироп, сливочное масло, загуститель глицерин (Е422), загуститель пектин (Е440), соль, регулятор кислотности карбонат натрия (Е500)), орехи пекан в пралине (сахар, пекан, сливочное масло, сироп глюкозы, соль), сахарный сироп, глюкозный сироп, ванильный экстракт, эмульгатор (Е471), стабилизаторы (Е466, Е412, Е407), пищевой краситель (Е160a).'+
        '</p>'+
        '<div class="buy">'+
        '<h2>699 ₽</h2>'+
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
        "<h1>Baskin Robbins миндаль-фисташка</h1>"+
        '<span>1000 мл<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2756334/94ff67c7-8574-4654-92be-5c6646e57291/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Сливки, восстановленное обезжиренное молоко, обжаренный миндаль, сахарный сироп, глюкозный сироп, ароматизатор фисташковый, эмульгатор (Е471), стабилизаторы (Е466, Е412, Е407), пищевой краситель (Е141).'+
        '</p>'+
        '<div class="buy">'+
        '<h2>699 ₽</h2>'+
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
        "<h1>Мороженое Baskin Robbins сливки с печеньем</h1>"+
        '<span>1000 мл<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2888787/495421e6-f284-4824-9585-ea17998f1a7d/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Сливки, восстановленное обезжиренное молоко, кусочки печенья (печенье (сахар, пшеничная мука, частично гидрогенизированное хлопковое масло, какао-порошок, высокофруктозный сироп глюкозы, кукурузная мука, кукурузный крахмал, соль, разрыхлитель карбонат натрия (Е500), эмульгатор соевый лецитин (Е322), ароматизатор ванильный, какао масса), кокосовое масло), сахарный сироп, глюкозный сироп, ванильный экстракт, эмульгатор (Е471), стабилизаторы (Е466, Е412, Е407), пищевой краситель (Е160b).'+
        '</p>'+
        '<div class="buy">'+
        '<h2>699 ₽</h2>'+
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
        "<h1>Мороженое Волшебные леденцы Baskin Robbins</h1>"+
        '<span>1000 мл<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2783132/e88cb558-9ad1-40c9-bd47-1525feb5419f/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Сливки, восстановленное обезжиренное молоко, база «волшебные леденцы» (глюкозный сироп, сахарный сироп, искусственный ароматизатор, регулятор кислотности (Е331), регулятор кислотности (Е330)), сахарный сироп, глюкозный сироп, пищевые красители (Е162, Е133), эмульгатор (E471), стабилизаторы (Е466, Е412, Е407).'+
        '</p>'+
        '<div class="buy">'+
        '<h2>699 ₽</h2>'+
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
        "<h1>Мороженое Фисташка Double Магнат</h1>"+
        '<span>300 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2783132/7e18fea4-4f37-45df-97a9-61e80dc62ed8/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Сливочное фисташковое мороженое (вода, сахар, масло сливочное, сухое молоко, глюкозо-фруктозный сироп, сыворотка сухая, концентрат сывороточного белка, фисташковая паста, стабилизаторы (гуаровая камедь, камедь рожкового дерева, каррагинан, карбоксиметилцеллюлоза), эмульгатор моно- и диглицериды жирных кислот, ароматизатор фисташки, красители (медные комплексы хлорофиллина, каротин), молочный шоколад (сахар, масло какао, какао тертое, молоко сухое цельное, молочный жир, эквивалент масла какао, эмульгатор лецитин, ароматизатор ванилин), шоколадный соус (вода, сахар, какао-порошок, глюкозно-фруктозный сироп, молоко сухое обезжиренное, кокосовое масло, стабилизаторы (каррагинан, Е1422), консервант сорбат калия, регулятор кислотности лимонная кислота, ароматизаторы (ванили, фисташки)), глазурь жировая какао содержащая (кокосовое масло, сахар, какао-порошок, молоко сухое обезжиренное, сыворотка сухая, эмульгатор лецитин, ароматизатор ванилин).'+
        '</p>'+
        '<div class="buy">'+
        '<h2>589 ₽</h2>'+
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