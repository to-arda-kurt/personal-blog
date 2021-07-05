import { useReducer } from 'react';
import axios from 'axios';
import ResumeReducer from './resumeReducer';
import ResumeContext from './resumeContext';
import { GET_GITHUB_USER, SET_LOADING, GET_GITHUB_USER_REPOS } from '../types';

let githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
let githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
let githubUserName = process.env.REACT_APP_GITHUB_USER_NAME;
let protectPass = process.env.RECT_APP_PROTECT_PASS;

const ResumeState = (props) => {
  const initialState = {
    user: {},
    repos: [],
    loading: false,
    protect: protectPass,
  };

  const [state, dispatch] = useReducer(ResumeReducer, initialState);

  //GET USER MYSELF
  const getUser = async () => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${githubUserName}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    console.log(res.data);
    console.log(process.env.PORT);

    dispatch({ type: GET_GITHUB_USER, payload: res.data });
  };
  //GET REPOS MYSELF

  const getUserRepos = async () => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${githubUserName}/repos?per_page=10&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    console.log(res.data);
    dispatch({ type: GET_GITHUB_USER_REPOS, payload: res.data });
  };

  //MANAGE LOADING
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };
  return (
    <ResumeContext.Provider
      value={{
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        protectPass: state.protectPass,
        getUser,
        getUserRepos,
        setLoading,
      }}
    >
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeState;
