useEffect(() => {
  // fetchDepositLinks();

  if (auth.user !== null) {
    var todecoded = auth.user;
    var decoded = jwt.decode(todecoded, {
      complete: true,
    });
    setStaffEmail(decoded.payload.email);
    // //console.log(decoded.payload.email);
  }
}, [auth]);
