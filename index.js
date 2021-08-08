// isplestinis variantas

const getFruits = async (name) => {
    const fruits = {
        pineapple: 'ananasas',
        peach: 'persikas',
        strawberry: 'braske',
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {      // Math.rangom reiksme nuo 0 iki 0.99999
                resolve(fruits[name]);
            } else {
                reject(`Vaisius "${name}" nerastas :(`);
            }
        }, 1000);
    });
}

(async () => {

    const vaisiai = [];

    try {
        console.log('1.');
        const pineapple = await getFruits('pineapple');  // await veikia tik esant asinchroninei funkcijai ir veikia tik funkcijos viduje
        console.log(pineapple);
        vaisiai.push(pineapple);
    } catch (error) {
        console.log(error);
    }

    try {
        console.log('2.');
        const peach = await getFruits('peach');
        console.log(peach);
        vaisiai.push(peach);
    } catch (error) {
        console.log(error);
    }

    try {
        console.log('3.');
        const strawberry = await getFruits('strawberry');
        console.log(strawberry);
        vaisiai.push(strawberry);
    } catch (error) {
        console.log(error);
    }

    console.log(vaisiai);

})();
