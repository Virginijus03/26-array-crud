const Sarasas = require('./Sarasas');

const auto = new Sarasas();

auto.prideti('audi');
auto.prideti('mb');
auto.prideti('ferari');
auto.prideti('audi');
auto.prideti('maz');
auto.prideti('kamaz');
auto.prideti('iz');
auto.prideti('zapas');
auto.prideti('java');

// auto.redaguoti(0, 'mazda');
// auto.redaguoti(-1, 'mazda');
// auto.redaguoti(2.5, 'mazda');

auto.redaguoti(4, 'opel');

auto.pasalinti(1);
auto.pasalinti(3);

auto.spausdinti();





























// auto.prideti('audi');
// auto.prideti('volvo');
// auto.spausdinti();

// auto.redaguoti(0, 'mazda');
// auto.spausdinti();

// auto.pasalinti(0);
// auto.spausdinti();
