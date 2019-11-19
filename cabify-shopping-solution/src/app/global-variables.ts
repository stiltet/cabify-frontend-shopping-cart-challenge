import { environment } from './core/environments/environment';

export class GlobalVariables {
  public static IS_DEVELOPMENT_ENVIRONMENT = window.location.href.startsWith(
    'http://localhost:5000/'
  );
  public static ENVIRONMENT = environment;

  // ROUTING PATHS
  public static ROUTING_PATH_HOME_PAGE = '';
  public static ROUTING_PATH_CHECKOUT = 'checkout';
  public static ROUTING_PATH_PRODUCT_DETAILS = 'product-details';
}
