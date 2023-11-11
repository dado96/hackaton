import { User } from 'src/users/entities/user.entity';
import { DataSource } from 'typeorm';
import { Negozio } from './negozio/entities/negozio.entity';
import { Spesa } from './spesa/entities/spesa.entity';
import { ListaProdotti } from './lista-prodotti/entities/lista-prodotti.entity';


let instance: DataSource | null = null;

const getInstance = () => {
  if (!!instance === false) {
    instance = new DataSource({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: '',
      database: '_test_',
      logging: false,
      synchronize: true,
      // entities: ["src/entities/*.js"],
      entities: [User, Spesa, Negozio, ListaProdotti],
    });
  }
  return instance;
};

const initAppDataSource = async (): Promise<DataSource | null> => {
  return new Promise((resolve, reject) => {
    const dataSource = getInstance();

    // establish database connection
    dataSource
      .initialize()
      .then(() => {
        console.log('Data Source has been initialized!');
        return resolve(dataSource);
      })
      .catch((err) => {
        console.error('Error during Data Source initialization:', err);
        return reject(null);
      });
  });
};

export { initAppDataSource, getInstance };
export default initAppDataSource;
