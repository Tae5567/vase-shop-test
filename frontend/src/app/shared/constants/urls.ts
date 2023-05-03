import { environment } from "src/environments/environment";

const BASE_URL = environment.production? '': 'http://localhost:9000';

export const VASES_URL = BASE_URL + '/api/vases';
export const SEARCH_URL = VASES_URL + '/search/';
export const DETAILS_URL = VASES_URL + '/';
export const ADD_URL = VASES_URL + '/add';
export const EDIT_URL = VASES_URL + '/edit/';
export const DELETE_URL = VASES_URL + '/delete/';
