  module.exports =() => {
    const responseHandler = async (_req, res, next) => {
      const formattedResponse = {
        Status: 'Success',
      };
      if(res.locals.errors) {
          formattedResponse.Status = 'Failure';
          formattedResponse.errors = res.locals.errors;
      }else{
        formattedResponse.data = res.locals.data;
      }
      res.header("Access-Control-Allow-Origin", "*");
      res.json(formattedResponse);
    }
    return {
      responseHandler
    }
  };
