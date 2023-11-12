export class PagesRouting {
   public static MainPages = {
      MainPage: '/',
      ShopPage: '/shop',
      ShopDetail: '/shop/:id',
      Cart: '/cart',
      Checkout: '/checkout',
      Contact: '/contact',
      PermissionDenied: '/permission-denied',
   };

   public static AuthorizationPages = {
      LoginPage: '/login',
      RegistrationPage: '/registration',
      EmailConfirmationPage: '/email-confirmation',
   };

   public static AdminPages = {
      Admin: '/admin',
   };
}
