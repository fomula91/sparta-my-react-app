export const setCookie = (token) => {
  console.log("hello setCookie");
  sessionStorage.setItem("mytoken", token);
};

export const getCookie = () => {
  console.log("hello getCookie");
  const cookie = sessionStorage.getItem("mytoken");
  return cookie;
};
