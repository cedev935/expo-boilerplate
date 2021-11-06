enum Routes {
  Home = 'home',
  Login = 'login',
  Profile = 'profile',
  Settings = 'settings',
  Post = 'post'
}
  
export type NavigationParams = RootStackParams;
  
export type RootStackParams = {
  [Routes.Home]: undefined;
  [Routes.Login]: undefined;
};

export type ProfileStackParams = {
  [Routes.Profile]: undefined;
  [Routes.Settings]: undefined;
  [Routes.Post]: { id:string };
};
  
export default Routes;