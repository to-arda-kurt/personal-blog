import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import BlogPage from './page/BlogPage';
import ResumePage from './page/ResumePage';
import ContactPage from './page/ContactPage';
import SingleBlog from './page/BlogPage/SingleBlog';

import PageConfigState from './context/PageConfig/PageConfigState';
import BlogState from './context/Blog/BlogState';
import ResumeState from './context/Resume/ResumeState';

function App() {
  return (
    <PageConfigState>
      <BlogState>
        <ResumeState>
          <Router>
            <div className="site-container">
              <Header />
              <Switch>
                <Route exact path="/contact" component={ContactPage} />
                <Route exact path="/resume" component={ResumePage} />
                <Route path="/blog/:handle" component={SingleBlog} />
                <Route exact path="/blog" component={BlogPage} />
                <Route exact path="/about" component={AboutPage} />
                <Route path="/" component={HomePage} />
              </Switch>
            </div>
          </Router>
        </ResumeState>
      </BlogState>
    </PageConfigState>
  );
}

export default App;
