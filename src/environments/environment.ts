// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
         production: false,
         url_api: "https://platzi-store.herokuapp.com",
         firebase: {
           apiKey: "AIzaSyBYTB4GaDTIWl8baeW4vObujeLsc1bqh5w",
           authDomain: "store-pruebas-jch.firebaseapp.com",
           databaseURL: "https://store-pruebas-jch.firebaseio.com",
           projectId: "store-pruebas-jch",
           storageBucket: "store-pruebas-jch.appspot.com",
           messagingSenderId: "1003315964274",
           appId: "1:1003315964274:web:950798f48813d6790495eb",
           measurementId: "G-Q3G6B9LJK1",
         },
         sentry_dns:
           "https://162f4100216347f3af6a20f7682b4183@o438817.ingest.sentry.io/5404243",
       };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
