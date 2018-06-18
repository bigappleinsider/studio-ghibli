import axios from 'axios';
import _ from 'lodash';

import { API_ENDPOINT, DISPLAY_FIELDS } from '../constants/api';

export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const RECEIVE_DETAILS = 'RECEIVE_DETAILS';
export const RECEIVE_LINKED_DETAILS = 'RECEIVE_LINKED_DETAILS';
export const RESET_DETAILS = 'RESET_DETAILS';

export const fetchDetails = (category, id) => async dispatch => {
  const {data} = await axios.get(`${API_ENDPOINT}/${category}/${id}`);
  //const dataWithLinks = await fetchLinks(data, category);
  const { links } = DISPLAY_FIELDS[category];
  
  await links.map(async link => {
    if (!_.isArray(data[link])) {
      const linkedData = await axios.get(data[link]);
      return dispatch({
        type: RECEIVE_LINKED_DETAILS,
        payload: {
          data: linkedData.data,
          link
        }
      });
    }
    else{
      Promise.all(data[link].map(link => {
        return axios.get(link);
      })).then(linkedData => {
        linkedData = linkedData.map(data => data.data);
        return dispatch({
          type: RECEIVE_LINKED_DETAILS,
          payload: {
            data: linkedData,
            link
          }
        });
      });
    }
  });

  return dispatch({
    type: RECEIVE_DETAILS,
    payload: data
  });

};

export const resetDetails = () => dispatch => {
  dispatch({
    type: RESET_DETAILS,
  });
};

export const filterByGender = (filter) => async (dispatch) => {
  const category = 'people';
  let {data} = await axios.get(`${API_ENDPOINT}/${category}`);
  if (filter){
    data = data.filter(p => p.gender === filter);
  }
  dispatch({
    type: RECEIVE_CATEGORY,
    payload: {
      data,
      category
    }
  })
};

export const fetchCategory = (category) => async dispatch => {
  const {data} = await axios.get(`${API_ENDPOINT}/${category}`);

  return dispatch({
    type: RECEIVE_CATEGORY,
    payload: {
      category,
      data
    }
  });
};