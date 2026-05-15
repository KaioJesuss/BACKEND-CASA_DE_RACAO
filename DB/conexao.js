import mysql from 'mysql2/pomisse';

export default function obterConexao(){

    if(global.poolConexoes){
        return await global.poolConexoes.getConnection();
    }
    else{
         const poolConexoes = await mysql.createpool({
            host: 'localhost',
            user: '10442428260',
            password: '10442428260',
            database: 'lanchonete'
        });
        global.poolConexoes = poolConexoes;
        return await poolConexoes.getConnection();
    }

}