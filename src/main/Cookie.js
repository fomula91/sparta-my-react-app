const getCookie = (name) => {
  let value = "; " + document.cookie;

  let parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

const setCookie = (name, value, exp = 5) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
};

const delCookie = (name) => {
  let date = new Date("2020-01-01").toUTCString();
  console.log(date);
  document.cookie = name + "=; expires=" + date;
};

export { getCookie, setCookie, delCookie };

// //259200000 -> 밀리초 3일
// const SetCookie = (id, pass) => {
//   let date = new Date(Date.now() + 259200000);
//   const date_str = date.toUTCString();

//   document.cookie = `${id}=${pass}; expires=${date_str};`;
// };

// const DelCookie = (id, pass) => {
//   let date = new Date(Date.now() - 3000000000);

//   const date_str = date.toUTCString();
//   document.cookie = `${id}=${pass}; expires=${date_str};`;
// };

// const GetCookie = (name) => {
//   const cookie = document.cookie;
//   const result = cookie.split("; ");
//   const dic = {};

//   result.map((value) => {
//     let [a, b] = value.split("=");
//     dic[a] = b;
//   });
//   console.log(dic);
// };

// export { DelCookie, SetCookie, GetCookie };
