const asyncHandler = async (requestHandler) => {
  //wrapper hoc
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)) //resolve with calling wrapped func
      .catch((err) => {
        console.log(err);
        next(err);
      });
  };
};
export default asyncHandler;