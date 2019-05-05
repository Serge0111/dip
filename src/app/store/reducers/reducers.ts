import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ProductActionTypes, ProductActionsUnion } from '../actions/actions';
import { IProduct } from '../interface';

export interface State extends EntityState<IProduct> {
    // additional entities state properties
    selectedUserId: number | null;
}

export const adapter: EntityAdapter<IProduct> = createEntityAdapter<IProduct>();

export const initialState: State = adapter.getInitialState({
    // additional entity state properties
    selectedUserId: null,
});

export function reducer(state = initialState, action: ProductActionsUnion): State {
    switch (action.type) {
      case ProductActionTypes.ADD_PRODUCT: {
        return adapter.addOne(action.payload.product, state);
      }

      case ProductActionTypes.DELETE_PRODUCT: {
        return adapter.removeOne(action.payload.id, state);
      }
      case ProductActionTypes.ADD_PRODUCTS: {
        return adapter.addMany(action.payload.product, state);
      }

      case ProductActionTypes.UPDATE_PRODUCT: {
        return adapter.updateOne(action.payload.product, state);
      }

      default: {
        return state;
      }
    }
  }
  export const getSelectedUserId = (state: State) => state.selectedUserId;
 
// get the selectors
const {
  selectIds,
  selectEntities,
} = adapter.getSelectors();
 
// select the array of user ids
export const selectProductIds = selectIds;
 
// select the dictionary of user entities
export const selectProductEntities = selectEntities;

