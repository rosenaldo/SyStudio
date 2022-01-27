const express = require('express');
const app = express();
const morgan = require('morgan');
//require('./database')

app.set('port', 8000);

/* ROTAS */

/*app.use('/salao', require('./src/routes/salao.routes'));
app.use('/cliente', require('./src/routes/cliente.routes'));
app.use('/servico', require('./src/routes/servico.routes'));
app.use('/colaborador', require('./src/routes/colaborador.routes'));
app.use('/horario', require('./src/routes/horario.routes'));
app.use('/agendamento', require('./src/routes/agendamento.routes'));*/

app.listen(app.get('port'), function () {
  console.log('WS escutando porta ' + app.get('port'));
});
