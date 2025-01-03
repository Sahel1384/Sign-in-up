document.querySelector(".signin").style.display = "none";
document.querySelector(".SingUp").style.display = "none";

document.querySelector(".signup").addEventListener("click", function () {
  //   all about signup form button start
  document.querySelector(".signup").style.display = "none";
  //   all about signup form button end

  //   all about signin form button start
  document.querySelector(".signin").style.display = "block";
  //   all about signin form button end

  //   all about signs div start
  document.querySelector(".signs").classList.add("new-signup");
  document.querySelector(".signs").style.borderTopLeftRadius = "0px";
  document.querySelector(".signs").style.borderBottomLeftRadius = "0px";
  document.querySelector(".signs").style.borderTopRightRadius = "100px";
  document.querySelector(".signs").style.borderBottomRightRadius = "100px";
  document.querySelector(".signs").style.transition = "all .9s";
  //   all about signs div end

  //   all about form div start
  document.querySelector(".form").classList.add("new-form");
  document.querySelector(".form").style.transition = "all .9s";
  //   all about form div end

  //   all about main div start
  document.querySelector(".main").style.borderBottomLeftRadius = "0px";
  document.querySelector(".main").style.borderBottomRightRadius = "40px";
  document.querySelector(".main").style.borderTopRightRadius = "40px";
  document.querySelector(".main").style.borderTopLeftRadius = "0px";
  document.querySelector(".main").style.transition = "all .9s";
  //   all about main div end

  //   all about submit signUp button start
  document.querySelector(".SingUp").style.display = "block";
  //   all about submit signUp button end

  // all about submit signIn button start
  document.querySelector(".SingIn").style.display = "none";
  // all about submit signIn button end
});

document.querySelector(".signin").addEventListener("click", function () {
  //   all about signin form button start
  document.querySelector(".signin").style.display = "none";
  //   all about signin form button end

  //   all about signup form button start
  document.querySelector(".signup").style.display = "block";
  //   all about signup form button end

  //   all about signs div start
  document.querySelector(".signs").classList.remove("new-signup");
  document.querySelector(".signs").style.borderTopLeftRadius = "100px";
  document.querySelector(".signs").style.borderBottomLeftRadius = "100px";
  document.querySelector(".signs").style.borderTopRightRadius = "0px";
  document.querySelector(".signs").style.borderBottomRightRadius = "0px";
  document.querySelector(".signs").style.transition = "all .9s";
  //   all about signs div end

  //   all about form div start
  document.querySelector(".form").style.transition = "all .9s";
  document.querySelector(".form").classList.remove("new-form");
  //   all about form div end

  //   all about main div start
  document.querySelector(".main").style.transition = "all .9s";
  document.querySelector(".main").style.borderBottomRightRadius = "0px";
  document.querySelector(".main").style.borderTopRightRadius = "0px";
  document.querySelector(".main").style.borderTopLeftRadius = "40px";
  document.querySelector(".main").style.borderBottomLeftRadius = "40px";
  //   all about main div end

  // all about submit signIn button start
  document.querySelector(".SingIn").style.display = "block";
  // all about submit signIn button end

  //   all about submit signUp button start
  document.querySelector(".SingUp").style.display = "none";
  //   all about submit signUp button end
});
