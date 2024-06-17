import { all, takeLatest } from "redux-saga/effects";
import { Get_Products } from "./Container/Products/actionType";
import { loadProducts } from "./Container/Products/saga";

export default function* SagaCalls() {
    yield all([takeLatest(Get_Products, loadProducts)])
}