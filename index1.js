// pirminis variantas - izanga

const getFruits = async (name) => {
    const fruits = {
        pineapple: 'ananasas',
        peach: 'persikas',
        strawberry: 'braske',
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(fruits[name]);
        }, 2000);
    });
}

(async () => {

    const pineapple = await getFruits('pineapple');  // await veikia tik esant asinchroninei funkcijai ir veikia tik funkcijos viduje
    console.log(pineapple);

    const peach = await getFruits('peach');
    console.log(peach);

    const strawberry = await getFruits('strawberry');
    console.log(strawberry);

})();
