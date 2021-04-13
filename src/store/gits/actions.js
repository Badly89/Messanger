import {
  GET_GISTS_REQUEST,
  GET_GISTS_SUCCESS,
  GET_GISTS_FAILURE,
} from "./types";
import axios from "axios";
const getGistsRequest = () => ({
  type: GET_GISTS_REQUEST,
});
const getGistsSuccess = (gists) => ({
  type: GET_GISTS_SUCCESS,
  gists,
});
const getGistsFailure = (err) => ({
  type: GET_GISTS_FAILURE,
  error: err,
});

export const GetGists = () => async (dispatch) => {
  try {
    dispatch(getGistsRequest());
    const res = await axios.get("https://api.github.com/gists/public");
  } catch (error) {}
};
