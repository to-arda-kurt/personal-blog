import { useReducer } from 'react';
import axios from 'axios';
import ResumeReducer from './resumeReducer';
import ResumeContext from './resumeContext';
import { GET_GITHUB_USER, SET_LOADING } from '../types';

let githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
let githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
let githubUserName = process.env.REACT_APP_GITHUB_USER_NAME;

const ResumeState = (props) => {
  const initialState = {
    user: {},
    repos: [],
    loading: false,
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
        getUser,
        setLoading,
      }}
    >
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeState;
