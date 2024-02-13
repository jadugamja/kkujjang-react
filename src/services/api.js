import axios from "axios";
import { BASE_URL } from "./const";

const api = axios.create({
  baseURL: BASE_URL
});

// 에러 핸들링
api.interceptors.response.use(
  (response) => response.result,
  (error) => {
    console.error(`[Error] ${err}`);
    throw error;
  }
);

// 공지사항 목록 조회
export const getNoticeList = async (page) => {
  return api.get(`/notice/list?page=${page}`);
};

// 공지사항 검색
export const getNoticeSearch = async (page, q) => {
  return api.get(`/notice/list?page=${page}&q=${q}`);
};

// 공지사항 상세 조회
export const getNoticeDetail = async (id) => {
  return api.get(`/notice/${id}`);
};

// 공지사항 등록
export const postNotice = async (formData) => {
  return api.post(`/notice`, formData);
};
