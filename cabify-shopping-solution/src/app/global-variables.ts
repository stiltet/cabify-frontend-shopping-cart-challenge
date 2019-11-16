import { environment } from './core/environments/environment';

export class GlobalVariables {
  public static IS_DEVELOPMENT_ENVIRONMENT = window.location.href.startsWith(
    'http://localhost:5000/'
  );
  public static ENVIRONMENT = environment;
  // API URL'S
  public static API_URL_GET_PRODUCTS = '/backend/getAllProducts';
}
