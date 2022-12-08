(function (){
    const appDiv = "bars";

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
        const link1 = createLink('Пломбир Российское Чистая Линия', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2805921/d9cf47b8-2f7c-4ff2-9592-03eb2f34732a/230x230-webp" alt="">'+
        '<h4>119 ₽</h4>'+
        '<h2>Пломбир Российское Чистая Линия</h2>'+
        '<span>80 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/bar1');
        const link2 = createLink('Мороженое Milka', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2750890/b4600a54-ceaf-4d4c-8bfd-7990ba98d228/230x230-webp" alt="">'+
        '<h4>129 ₽</h4>'+
        '<h2>Мороженое</br>Milka</h2>'+
        '<span>62 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/bar2');
        const link3 = createLink('Мороженое Лесные ягоды Milka', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2756334/db4d50e1-edcf-4647-a5e7-9acbed194994/230x230-webp" alt="">'+
        '<h4>159 ₽</h4>'+
        '<h2>Мороженое Лесные ягоды Milka</h2>'+
        '<span>64 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/bar3');
        const link4 = createLink('Мороженое Alpen Gold', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2756334/21ac5d13-9bac-48cc-b6f7-59311138e539/230x230-webp" alt="">'+
        '<h4>119 ₽</h4>'+
        '<h2>Мороженое</br>Alpen Gold</h2>'+
        '<span>58 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/bar4');

        const link5 = createLink('Мороженое Манго и Красные ягоды Магнат', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2805921/10800f02-a29d-47e0-9009-b3df0b16e0f9/230x230-webp" alt="">'+
        '<h4>129 ₽</h4>'+
        '<h2>Мороженое Манго и Красные ягоды Магнат</h2>'+
        '<span>74 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/bar5');
        const link6 = createLink('Мороженое Шоколадный трюфель Магнат', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2756334/bd73356b-53ea-4ad1-a116-922eb422dc16/230x230-webp" alt="">'+
        '<h4>129 ₽</h4>'+
        '<h2>Мороженое Шоколадный трюфель Магнат</h2>'+
        '<span>72 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/bar6');

        const link7= createLink('Мороженое Магнат Ruby', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2756334/2076ae11-f6c8-4976-b76e-d8ab05062065/230x230-webp" alt="">'+
        '<h4>129 ₽</h4>'+
        '<h2>Мороженое</br>Магнат Ruby</h2>'+
        '<span>72 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/bar7');
        const link8 = createLink('Мороженое фисташка-малина Магнат', '<div class="card">'+
        '<img class="size1" src="https://yastatic.net/avatars/get-grocery-goods/2783132/e9b1292a-421f-4831-8ba3-5a010d730143/230x230-webp" alt="">'+
        '<h4>129 ₽</h4>'+
        '<h2>Мороженое фисташка-малина Магнат</h2>'+
        '<span>70 г</span>'+
        '<div class="buy">'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '</div>', '#/bar8');


        myDiv.appendChild(link1);
        myDiv.appendChild(link2);
        myDiv.appendChild(link3);
        myDiv.appendChild(link4);
        myDiv.appendChild(link5);
        myDiv.appendChild(link6);
        myDiv.appendChild(link7);        
        return myDiv.appendChild(link8);
    });

    template('bar1', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('bar1', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Пломбир Российское Чистая Линия</h1>"+
        '<span>80 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2805921/d9cf47b8-2f7c-4ff2-9592-03eb2f34732a/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Молоко коровье цельное 51,5%, сливки натуральные 21,6%, молоко сгущённое цельное с сахаром 17,7% (молоко цельное, молоко обезжиренное, сахароза, лактоза), сахар 5,5%, глюкозный сироп 2,0%, цитрусовые волокна 0,6%, яичный желток 0,5%, молочный белок 0,5%, натуральный ароматизатор ванили 0,1%. Шоколадная глазурь: эквивалент какао-масла, какао тёртое, сахар, молоко сухое обезжиренное, эмульгатор лецитин, ароматизатор ванилин.'+
        '</p>'+
        '<div class="buy">'+
        '<h2>119 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
        return myDiv.appendChild(link1);
    });

    template('bar2', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('bar2', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Мороженое Milka</h1>"+
        '<span>62 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2750890/b4600a54-ceaf-4d4c-8bfd-7990ba98d228/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Восстановленное молоко (вода питьевая, сухое обезжиренное молоко), молочная шоколадная масса Milka (сахар, какао масло, какао тертое, молоко сухое цельное, сыворотка молочная сухая, сухое обезжиренное молоко, жир молочный, эмульгаторы: лецитин соевый, Е476; паста из фундука, ароматизатор), глюкозный сироп, масло сливочное, сахар, шоколадный соус (сахар, какао масло, масло кокосовое, какао тертое, молоко сухое цельное, сыворотка молочная сухая, сухое обезжиренное молоко, жир молочный, эмульгаторы: лецитин соевый, Е476; паста из фундука, ароматизатор), сыворотка молочная сухая, стабилизаторы: гуаровая камедь, камедь рожкового дерева, каррагинан из водорослей; эмульгатор моно- и диглицериды жирных кислот, экстракт моркови, семена ванили, ароматизатор. Продукт может содержать другие орехи, яйца, глютен, арахис.'+
        '</p>'+
        '<div class="buy">'+
        '<h2>129 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
        return myDiv.appendChild(link1);
    });
    template('bar3', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('bar3', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Мороженое Лесные ягоды Milka</h1>"+
        '<span>64 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2756334/db4d50e1-edcf-4647-a5e7-9acbed194994/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Молочная шоколадная масса Milka (сахар, какао масло, какао тертое, молоко сухое цельное, сыворотка молочная сухая, сухое обезжиренное молоко, жир молочный, эмульгаторы: лецитин соевый, Е476; паста из фундука, ароматизатор), восстановленное молоко (вода питьевая, сухое обезжиренное молоко), наполнитель «Лесные ягоды» (глюкозно-фруктозный сироп, сахар, вода питьевая, пюре малины, сок черничный, пюре ежевичное, стабилизаторы: пектины, камедь рожкового дерева; регулятор кислотности лимонная кислота, концентрированный сок черной моркови, ароматизатор, краситель антоцианы), глюкозный сироп, масло сливочное, сахар, вода питьевая, сыворотка молочная сухая, ягоды черники сушеные, стабилизаторы: гуаровая камедь, камедь рожкового дерева, каррагинан из водорослей; эмульгатор моно- и диглицериды жирных кислот. Продукт может содержать другие орехи, яйца, глютен, арахис.'+
        '</p>'+
        '<div class="buy">'+
        '<h2>159 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
        return myDiv.appendChild(link1);
    });

    template('bar4', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('bar4', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Мороженое Alpen Gold</h1>"+
        '<span>58 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2756334/21ac5d13-9bac-48cc-b6f7-59311138e539/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Восстановленное молоко (вода питьевая, сухое обезжиренное молоко), молочный шоколад Alpen Gold (сахар, какао тертое, масло какао, сыворотка молочная сухая, сухое цельное молоко, молочный жир, эмульгаторы: лецитин соевый, Е476; ароматизатор), глюкозный сироп, сахар, масло сливочное, масло какао, сыворотка молочная сухая, хрустящий рис (мука рисовая, сахар, соль), шарики соленые (мука пшеничная (содержит глютен), сахар, соль, крупа овсяная, пшеничный солод (содержит глютен), разрыхлитель гидрокарбонат натрия, ароматизатор), какао-порошок, эмульгаторы: Е476, моно- и диглицериды жирных кислот; сливки сухие, стабилизаторы: гуаровая камедь, камедь рожкового дерева, каррагинан из водорослей; ароматизатор.'+
        '</p>'+
        '<div class="buy">'+
        '<h2>119 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
        return myDiv.appendChild(link1);
    });
    template('bar5', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('bar5', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Мороженое Манго и Красные ягоды Магнат</h1>"+
        '<span>74 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2805921/10800f02-a29d-47e0-9009-b3df0b16e0f9/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Цельное молоко, белый шоколад (сахар, масло какао, молоко сухое обезжиренное, молочный жир, эмульгатор (Е342, Е476), натуральный ароматизатор, соль поваренная), сахар, сироп глюкозы, пюре красной смородины, миндаль, вода, пюре манго, масло сливочное (В) или молочный жир (F), сыворотка сухая подсырная, краситель красный свекольный, мальтодекстрин, молоко сухое, регулятор кислотности лимонная кислота, эмульгатор (моно- и диглицериды жирных кислот), стабилизаторы (гуаровая камедь, камедь рожкового дерева, каррагинан), краситель аннато, ароматизаторы.'+
        '</p>'+
        '<div class="buy">'+
        '<h2>129 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
        return myDiv.appendChild(link1);
    });

    template('bar6', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('bar5', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Мороженое Шоколадный трюфель Магнат</h1>"+
        '<span>72 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2756334/bd73356b-53ea-4ad1-a116-922eb422dc16/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Молоко цельное, молочный шоколад (сахар, масло какао, какао тертое, сухое цельное молоко, молочный жир, эмульгаторы (соевый лецитин, Е476), ароматизатор ванильный, наполнитель шоколадный (сахар, вода, порошок какао, заменитель молочного жира, молоко сухое обезжиренное, стабилизатор пектин, натуральный ароматизатор «Шоколад»), сахар, вода, сироп глюкозы, шоколадные бисквиты (мука пшеничная, сахар, сливочное масло, яичный порошок, порошок какао, вода, мука кукурузная, соль поваренная, разрыхлитель Е500), заменитель молочного жира, масло сливочное (В) или молочный жир (F), сыворотка сухая подсырная, порошок какао, молоко сухое обезжиренное, мальтодекстрин, эмульгаторы (моно- и диглицериды жирных кислот), стабилизаторы (гуаровая камедь, камедь рожкового дерева, каррагинан).'+
        '</p>'+
        '<div class="buy">'+
        '<h2>129 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
        return myDiv.appendChild(link1);
    });
    template('bar7', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('bar6', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Мороженое Магнат Ruby</h1>"+
        '<span>72 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2756334/2076ae11-f6c8-4976-b76e-d8ab05062065/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Цельное молоко, сахар, вода, масло какао, масло сливочное (В) или молочный жир (F), глюкозный сироп, сухое молоко, молочный жир, глюкозно-фруктозный сироп, малиновое пюре, какао тёртое, декстроза, малиновый сок, сыворотка сухая, яблочное пюре, эмульгаторы (моно и диглицериды жирных кислот, лецитин, Е476, стабилизаторы (камедь рожкового дерева, гуаровая камедь, камедь гары, каррагинан, пектин), регулятор кислотности лимонная кислота, краситель антоцианы, натуральные ароматизаторы, соль поваренная.'+
        '</p>'+
        '<div class="buy">'+
        '<h2>129 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
        return myDiv.appendChild(link1);
    });

    template('bar8', () => {
        let myDiv = document.getElementById(appDiv);
        myDiv.innerHTML = "";
        myDiv.style.display = "flex";
        const link1 = createDiv('bar7', "<div class='content'>"+
        "<div class='upper'>"+
        "<h1>Мороженое фисташка-малина Магнат</h1>"+
        '<span>70 г<span>'+
        '</div>'+
        '<img class="size2" src="https://yastatic.net/avatars/get-grocery-goods/2783132/e9b1292a-421f-4831-8ba3-5a010d730143/464x464-webp" alt="">'+        
        "<div class='info'>"+
        "<h2>Состав</h2>"+
        '<p>'+
        'Мороженое сливочное с фисташковой пастой (цельное молоко, вода, сироп глюкозы, сахар, масло сливочное (B) или молочный жир (F), молоко сухое, сыворотка сухая, фисташковая паста, эмульгатор моно- и диглицериды жирных кислот, стабилизаторы (камедь тары, гуаровая камедь, камедь рожкового дерева, каррагинан), натуральный ароматизатор, красители (аннато, медные комплексы хлорофиллина), молочный шоколад (сахар, масло какао, какао тёртое, сухое цельное молоко, молочный жир, эквивалент масла какао, сыворотка сухая, эмульгаторы (лецитин, Е476), ароматизатор ванильный), малиновый наполнитель (сахар, глюкозно-фруктозный сироп, малиновое пюре, вода, декстроза, яблочный сок, малиновый сок, регулятор кислотности лимонная кислота, стабилизатор пектин, краситель антоцианы, ароматизатор), ядра орехов фисташки обжаренные дроблёные. '+
        '</p>'+
        '<div class="buy">'+
        '<h2>129 ₽</h2>'+
        '<button type="button">Купить</button>'+
        '</div>'+
        '<a href="#/"><button type="button">←</button></a>'+
        '</div>');
        return myDiv.appendChild(link1);
});

    // Define the mappings route->template.
    route('/', 'main');
    route('/bar1', 'bar1');
    route('/bar2', 'bar2');
    route('/bar3', 'bar3');
    route('/bar4', 'bar4');
    route('/bar5', 'bar5');
    route('/bar6', 'bar6');
    route('/bar7', 'bar7');
    route('/bar8', 'bar8');

    // For first load or when routes are changed in browser url box.
    window.addEventListener('load', router);
    window.addEventListener('hashchange', router);

})()