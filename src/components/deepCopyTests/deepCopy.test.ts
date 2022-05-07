import {
    addMoreFirstName,
    countriesType,
    getShallowCopy, refactorCompanyName,
    removeFirstName,
    renameStreetName,
    replaceLastName
} from './deepCopy';


test('more names', () => {
    let countries: countriesType = {
        cityCount: 6,
        city: {
            cityName: 'Mogilev',
            streetName: 'Kriulina',
            houseNumber: 81,
            peoples: {
                peopleCount: 300000,
                firstName: ['Misha', 'Olya', 'Dasha', 'Igor'],
                lastName: ['Anufriev', 'Hilko', 'Yakovenko', 'Petrosyan']
            }
        },
        villageCount: 24,
        village: {
            peopleCount: 100,
            houseNumber: 45
        },
        lakesCount: 13,
        lakes: {
            lakesName: 'Saint Lake',
            lakesSquare: 60
        },
        companies: [
            {id: 1, title: 'Andersen'},
            {id: 2, title: 'IT-INC'}
        ]

    }

    const renameCity = renameStreetName(countries, 'Grishina');
    const renameFirstName = removeFirstName(countries, ['Grisha', 'Fedor', 'Vova', 'Lukashenko']);
    const shallowCopy = getShallowCopy(countries)
    const moreFirstName = addMoreFirstName(countries, ['Mila', 'Ally', 'Kate'])
    const replaceName = replaceLastName(countries, 'Igor super man', 'Anufriev')
    const refactorCompany = refactorCompanyName(countries, 1, 'Google')

    expect(countries.lakes).toBe(shallowCopy.lakes)
    expect(countries).not.toBe(renameCity);
    expect(countries).not.toBe(renameFirstName);
    expect(moreFirstName.city.peoples.firstName).toStrictEqual(['Misha', 'Olya', 'Dasha', 'Igor', 'Mila', 'Ally', 'Kate'])
    expect(replaceName.city.peoples.lastName).toStrictEqual(['Igor super man', 'Hilko', 'Yakovenko', 'Petrosyan'])
    expect(refactorCompany.companies[0].title).toBe('Google')


})