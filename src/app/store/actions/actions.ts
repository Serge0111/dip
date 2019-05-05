import { Action } from '@ngrx/store';
import { IProduct } from '../interface';
import { Update } from '@ngrx/entity';

export enum ProductActionTypes {
    ADD_PRODUCT = '[Counter Component] Add',
    DELETE_PRODUCT = '[Counter Component] delete',
    UPDATE_PRODUCT = '[Counter Component] update',
    ADD_PRODUCTS = '[Counter Component] Add All',
}

export class AddProduct implements Action {
    readonly type = ProductActionTypes.ADD_PRODUCT;
    constructor(public payload: { product: IProduct }) { }
}

export class DeleteProduct implements Action {
    readonly type = ProductActionTypes.DELETE_PRODUCT;
    constructor(public payload: { id: string }) { }
}

export class UpdateProduct implements Action {
    readonly type = ProductActionTypes.UPDATE_PRODUCT;
    constructor(public payload: { product: Update<IProduct> }) { }
}

export class AddProducts implements Action {
    readonly type = ProductActionTypes.ADD_PRODUCTS;
    constructor(public payload: { product: IProduct[] }) { }
}
export type ProductActionsUnion =
    | AddProduct
    | DeleteProduct
    | UpdateProduct
    | AddProducts;
