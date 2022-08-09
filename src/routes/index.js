import Header from '../template/Header';
import Home from '../pages/home';
import Character from '../pages/Character';
import Error from '../pages/error-404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
//create rutes

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
}

const Router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error;

    content.innerHTML = await render();
}

export default Router;