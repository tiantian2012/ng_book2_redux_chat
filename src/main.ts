import { bootstrap }    from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { AppComponent  } from './app/app';
import { Store, compose, StoreEnhancer, createStore } from 'redux';
import { AppState, rootReducer as reducer } from './app/reducers/index';
import { AppStore } from './app/app.store'

// import { HTTP_PROVIDERS,XHRBackend } from '@angular/http';
if (process.env.ENV === 'production') {
  enableProdMode();
}
// bootstrap(AppComponent, [
//   APP_ROUTER_PROVIDERS,
//   HTTP_PROVIDERS,
//   {provide:XHRBackend,useClass:InMemoryBackendService},
//   {provide:SEED_DATA,useClass:InMemoryDataService}
// ]);
let devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
    window['devToolsExtension']() : f => f;

let store: Store<AppState> = createStore<AppState>(
  reducer,
  compose(devtools)
);

bootstrap(AppComponent, [
  provide(AppStore, { useFactory: () => store }),
])
  .catch((err: any) => console.error(err));


