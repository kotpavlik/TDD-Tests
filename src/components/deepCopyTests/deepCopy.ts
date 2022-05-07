export type countriesType = {
    cityCount: number
    city: {
        cityName: string
        streetName: string
        houseNumber: number
        peoples: {
            peopleCount: number
            firstName: Array<string>
            lastName: Array<string>
        }
    }
    villageCount: number
    village: {
        peopleCount: number
        houseNumber: number
    }
    lakesCount: number
    lakes: {
        lakesName: string
        lakesSquare: number
    },
    companies:Array<companyType>
}
type companyType = {id:number,title:string}

export function renameStreetName(countries: countriesType, streetName: string) {
    return {...countries, city: {...countries.city, streetName: streetName}}
}
export function removeFirstName(countries: countriesType, names: Array<string>) {
    return {...countries, city: {...countries.city, peoples: {...countries.city.peoples, firstName: names}}}
}
export function getShallowCopy(countries: countriesType) {
    return {...countries}
}
export function addMoreFirstName(countries: countriesType, newName: Array<string>) {
    return {
        ...countries,
        city: {
            ...countries.city,
            peoples: {
                ...countries.city.peoples,
                firstName: [
                    ...countries.city.peoples.firstName, ...newName]
            }
        }
    }
}
export function replaceLastName(countries: countriesType, newName: string, oldName: string) {
    let replaceLastNameArr = {...countries,
        city: {
        ...countries.city,
            peoples: {
            ...countries.city.peoples,
                lastName:[
                    ...countries.city.peoples.lastName.map(name => name === oldName ? newName : name)
                ]
        }}}
    return replaceLastNameArr
}
export const  refactorCompanyName = (countries:countriesType,id:number,newTitle:string) => (
    {
...countries,companies:countries.companies.map(el => el.id === id ? {...el,title:newTitle}: el)
})
