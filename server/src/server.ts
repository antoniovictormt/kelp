import app from './app';
import database from './database';

database.sync(/* { force: true } recriar o banco*/);
console.log('Database running at 3306');
app.listen(3333);
console.log('Server running at 3333');