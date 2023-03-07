import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container'
import { Route, Switch } from 'react-router-dom';
import "./api/axiosDefaults";
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from './pages/posts/PostCreateForm';
import PostFeed from './pages/posts/PostFeed';
import PostsFeed from './pages/posts/PostsFeed';
import { useCurrentUser } from './contexts/CurrentUserContext';
import EditPostForm from './pages/posts/EditPostForm';
import ProfilePage from './pages/profiles/ProfilePage';
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import UsernameForm from './pages/profiles/UsernameForm';
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import AboutPage from './pages/about/AboutPage';




function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path='/' render={() => <PostsFeed message="Found no results! Use another keyword." />} />
          <Route exact path='/pawfeed'
            render={() =>
              <PostsFeed message="Found no results! Use another keyword or follow a user!"
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />}
          />
          <Route exact path='/saved'
            render={() =>
              <PostsFeed message="Found no results! Use another keyword or save a post!"
                filter={`saved__owner__profile=${profile_id}&ordering=-saved__created_at&`}
              />}
          />
          <Route exact path='/signin' render={() => <SignInForm />} />
          <Route exact path='/signup' render={() => <SignUpForm />} />
          <Route exact path='/about' render={() => <AboutPage />} />
          <Route exact path='/posts/create' render={() => <PostCreateForm />} />
          <Route exact path='/posts/:id/edit' render={() => <EditPostForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route exact path='/posts/:id' render={() => <PostFeed />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;