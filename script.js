const article = [
    {
        name: 'Call',
        info: 'Метод call() вызывает функцию с указанным значением this и индивидуально предоставленными аргументами.'
    },
    {
        name: 'Apply',
        info: 'Метод apply() вызывает функцию с указанным значением this и аргументами, предоставленными в виде массива (либо массивоподобного объекта (en-US)).'
    }

]
const app = document.querySelector('#app');

article.forEach(element => {
    const articleEl = document.createElement('div');

    const headingName = document.createElement('h1');
    headingName.classList.add('heading');
    headingName.textContent = `Метод: ${element.name}`

    articleEl.append(headingName);

    const paragraphInfo = document.createElement('p');
    paragraphInfo.classList.add('text');
    paragraphInfo.textContent = element.info;

    articleEl.append(paragraphInfo);

    app.append(articleEl);
});

