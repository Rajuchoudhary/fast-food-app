import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const AddItemPage = lazy(() =>
  import('./Dashboard/Admin/AddItemPage/AddItemPage')
);

const AdminCategoryPage = lazy(() =>
  import('./Dashboard/Admin/AdminCategoryPage/AdminCategoryPage')
);

const AdminUpdateCategoryPage = lazy(() =>
  import('./Dashboard/Admin/AdminCategoryPage/AdminUpdateCategoryPage')
);

const AdminMenuPage = lazy(() =>
  import('./Dashboard/Admin/AdminMenuPage/AdminMenuPage')
);

const AdminOrderDetailPage = lazy(() =>
  import('./Dashboard/Admin/AdminOrderDetailPage/AdminOrderDetailPage')
);

const AdminOrderPage = lazy(() =>
  import('./Dashboard/Admin/AdminOrderPage/AdminOrderPage')
);

const AdminUserPage = lazy(() =>
  import('./Dashboard/Admin/AdminUserPage/AdminUserPage')
);

const AdminWelcomePage = lazy(() =>
  import('./Dashboard/Admin/AdminWelcomePage/AdminWelcomePage')
);

const EditItemPage = lazy(() =>
  import('./Dashboard/Admin/EditItemPage/EditItemPage')
);

const OrderDetailPage = lazy(() =>
  import('./Dashboard/User/OrderDetailPage/OrderDetailPage')
);

const OrderPage = lazy(() => import('./Dashboard/User/OrderPage/OrderPage'));

const SettingPage = lazy(() =>
  import('./Dashboard/User/SettingPage/SettingPage')
);

const WelcomePage = lazy(() =>
  import('./Dashboard/User/WelcomePage/WelcomePage')
);

const AdminSignInPage = lazy(() =>
  import('./pages/AdminSignInPage/AdminSignInPage')
);

const CartPage = lazy(() => import('./pages/CartPage/CartPage'));

const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));
const DeliveryPage = lazy(() => import('./pages/DeliveryPage/DeliveryPage'));
const FAQPage = lazy(() => import('./pages/FAQPage/FAQPage'));

const ForgotPage = lazy(() => import('./pages/ForgotPage/ForgotPage'));
const ItemDetailPage = lazy(() =>
  import('./pages/ItemDetailPage/ItemDetailPage')
);
const MenuPage = lazy(() => import('./pages/MenuPage/MenuPage'));

const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const PaymentPage = lazy(() => import('./pages/PaymentPage/PaymentPage'));
const PayNowPage = lazy(() => import('./pages/PayNowPage/PayNowPage'));

const ResetPage = lazy(() => import('./pages/ResetPage/ResetPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage/ServicesPage'));
const UpdateOrderPage = lazy(() =>
  import('./pages/UpdateOrderPage/UpdateOrderPage')
);

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));

const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));

//User Routes
const AuthenticatedRoute = ({ children, ...rest }) => {
  const userInfo = useSelector((state) => state.userInfo);

  return (
    <Route
      {...rest}
      render={() =>
        userInfo?.token && !userInfo?.isAdmin ? (
          <>{children}</>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

//Admin Routes
const AdminRoute = ({ children, ...rest }) => {
  const userInfo = useSelector((state) => state.userInfo);

  return (
    <Route
      {...rest}
      render={() =>
        userInfo?.token && userInfo?.isAdmin ? (
          <>{children}</>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

//Not Allowed Routes
const NotAllowedRoute = ({ children, ...rest }) => {
  const userInfo = useSelector((state) => state.userInfo);

  return (
    <Route
      {...rest}
      render={() =>
        userInfo?.token ? (
          <Redirect to="/dashboard" />
        ) : userInfo?.token && userInfo?.isAdmin ? (
          <Redirect to="/admin/dashboard" />
        ) : (
          <>{children}</>
        )
      }
    />
  );
};

//Fallback UI
const FallbackUI = () => {
  return (
    <div className="fallbak-ui">
      <Loading big />
    </div>
  );
};
//App Routes
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<FallbackUI />}>
        <Switch>
          {/* Public Routes  */}
          <Route path="/" exact component={HomePage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/item-detail/:itemId" component={ItemDetailPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/delivery" component={DeliveryPage} />
          <Route path="/payment" component={PaymentPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/faq" component={FAQPage} />
          <Route path="/contact" component={ContactPage} />

          {/* User  Routes */}
          <AuthenticatedRoute path="/paynow">
            <PayNowPage />
          </AuthenticatedRoute>
          <AuthenticatedRoute path="/update-order/:orderId">
            <UpdateOrderPage />
          </AuthenticatedRoute>
          <AuthenticatedRoute path="/dashboard">
            <WelcomePage />
          </AuthenticatedRoute>
          <AuthenticatedRoute path="/orders" exact>
            <OrderPage />
          </AuthenticatedRoute>
          <AuthenticatedRoute path="/orders/:orderId">
            <OrderDetailPage />
          </AuthenticatedRoute>
          <AuthenticatedRoute path="/settings">
            <SettingPage />
          </AuthenticatedRoute>

          {/* Admin Routes */}
          <AdminRoute path="/admin/dashboard">
            <AdminWelcomePage />
          </AdminRoute>
          <AdminRoute path="/admin/orders" exact>
            <AdminOrderPage />
          </AdminRoute>
          <AdminRoute path="/admin/orders/:orderId">
            <AdminOrderDetailPage />
          </AdminRoute>
          <AdminRoute path="/admin/users">
            <AdminUserPage />
          </AdminRoute>
          <AdminRoute path="/admin/menu">
            <AdminMenuPage />
          </AdminRoute>
          <AdminRoute path="/admin/categories" exact>
            <AdminCategoryPage />
          </AdminRoute>
          <AdminRoute path="/admin/categories/:categoryId/:categoryName">
            <AdminUpdateCategoryPage />
          </AdminRoute>
          <AdminRoute path="/admin/add-item">
            <AddItemPage />
          </AdminRoute>
          <AdminRoute path="/admin/edit-item/:itemId">
            <EditItemPage />
          </AdminRoute>

          {/* Not Allowed Routes */}
          <NotAllowedRoute path="/signup">
            <SignUpPage />
          </NotAllowedRoute>
          <NotAllowedRoute path="/signin">
            <SignInPage />
          </NotAllowedRoute>
          <NotAllowedRoute path="/forgot">
            <ForgotPage />
          </NotAllowedRoute>
          <NotAllowedRoute path="/reset/:token">
            <ResetPage />
          </NotAllowedRoute>
          <NotAllowedRoute path="/admin/signin">
            <AdminSignInPage />
          </NotAllowedRoute>

          {/* Not Found Route */}
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
