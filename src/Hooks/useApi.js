import axios from "axios";
import React, { useState } from "react";

const getData = async (url) => {
  const res = await axios.get(url);
  const data = await res.data;

  return data;
};

const setData = async (url, data) => {
  const res = await axios.post(url, data);
  const data = await res.data;

  return data;
};

const updateData = async (url, id, data) => {
  const res = await axios.put(url, data);
  const data = await res.data;

  return data;
};

const deleteData = async (url, id) => {
  const res = await axios.delete(url, id);
  const data = await res.data;

  return data;
};

function useApi() {
  const baseUrl = import.meta.env.APP_BACK_URL;

  const [res, setRes] = useState({});

  const get = async (path) => {
    const url = `${baseUrl + path}`;
    const data = await getData(url);
    setRes(data);
  };

  const post = async (path, data) => {
    const url = `${baseUrl + path}`;
    const data = await setData(url, data);
    setRes(data);
  };

  const put = async (path, id, data) => {
    const url = `${baseUrl + path}`;
    const data = await updateData(url, id, data);
    setRes(data);
  };

  const del = async (path, id) => {
    const url = `${baseUrl + path}`;
    const data = await deleteData(url, id);
    setRes(data);
  };

  return { get, post, put, del, res };
}

export default useApi;
