export class PagesRouting {
    public static MainPages = {
        MainPage: '/',
        ShopPage: '/shop',
        ShopDetail: '/shop/:id',
        PermissionDenied: '/permission-denied',
    };

    public static AuthorizationPages = {
        LoginPage: '/login',
        RegistrationPage: '/registration',
    };

    public static AdminPages = {
        Admin: '/admin',
    };
}
