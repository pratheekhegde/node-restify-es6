// combine routes
import TestRoutes from './test';
import TodoRoutes from './todo';

export default(server) => {
    TestRoutes(server);
    TodoRoutes(server);
};