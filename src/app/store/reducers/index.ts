import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
} from '@ngrx/store';
import * as fromUser from './reducers';

export interface State {
    products: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
    products: fromUser.reducer,
};

export const selectProductState = createFeatureSelector<fromUser.State>('products');

export const selectUserIds = createSelector(
    selectProductState,
    fromUser.selectProductIds
  );
  export const selectUserEntities = createSelector(
    selectProductState,
    fromUser.selectProductEntities
  );