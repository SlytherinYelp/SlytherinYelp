import axios from 'axios';

export const getVolume = search => {
  return axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
    .then(({ data }) => data);
};

export const getVolumeId = id => {
  return axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`).then(({ data }) => data);
};
