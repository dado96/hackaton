import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { NegozioModule } from './negozio/negozio.module';
import { SpesaModule } from './spesa/spesa.module';
import { Negozio } from './negozio/entities/negozio.entity';
import { Spesa } from './spesa/entities/spesa.entity';
import { ListaProdottiModule } from './lista-prodotti/lista-prodotti.module';
import { ListaProdotti } from './lista-prodotti/entities/lista-prodotti.entity';

@Module({
  imports: [UsersModule, NegozioModule, SpesaModule,
    TypeOrmModule.forRoot({
       type: 'mysql',
        host: 'localhost',
        port: 3308,
        username: 'root',
        password: '',
        database: '_test_',
        logging: false,
        synchronize: true,
        entities: [],
      }
    ),
    UsersModule,
    NegozioModule,
    SpesaModule,
    ListaProdottiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
