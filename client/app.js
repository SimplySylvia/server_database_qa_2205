console.log(
  "%c[App.js] Loaded",
  "background-color:rebeccapurple; padding: 10px;"
);

axios({
  method: "GET",
  url: "http://localhost:1337/test",
})
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });

const submitBand = band => {
  axios({
    method: "POST",
    url: "http://localhost:1337/bands",
    data: band,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};
