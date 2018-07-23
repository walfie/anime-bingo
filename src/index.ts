import { app } from "hyperapp";
import { AniListSearch } from "./search";
import { State, initialState } from "./state";
import { actions } from "./actions";
import { view } from "./view";
import './styles/styles.css';

const state = (module.hot.data || {}).state as State || initialState;
const application = app(state, actions(new AniListSearch()), view, document.body);

(window as any).application = application;

if (module.hot) {
  module.hot.dispose(() => {
    module.hot.data.state = application.getState();
  });
}

