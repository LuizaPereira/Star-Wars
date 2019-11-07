// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  characters: 'https://swapi.co/api/people/?format=json',
  movies: 'https://swapi.co/api/films/?format=json',
  planets: 'https://swapi.co/api/planets/?format=json',
  species: 'https://swapi.co/api/species/?format=json',
  starships: 'https://swapi.co/api/starships/?format=json',
  vehicles: 'https://swapi.co/api/vehicles/?format=json'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
