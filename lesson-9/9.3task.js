const car1 = {
    brand: 'Lada',
    model: 'Chetyrka',
    year: 2013
}

const car2 = {
    brand: 'Toyota',
    model: 'Camry',
    owner: 'Master Yoda'
}

const car3 = {
    ...car1,
    ...car2
}

console.log(car3)