const errorUtils = require('./errors');
const errorConfigs = require('../configs').errors;

module.exports = () => {
  const { getErrorMessage,types:{MicroserviceError,RequestValidationError} } = errorUtils;
  /**
 * @description global error handler
 */
  const handleError = (err, _req, res, next) => {
    const {
      status, code, // , messages, stack,
    } = err;
    console.error(`d4e4a8f9-b1d2-44a2-b771-bbbc73fc2741 : Error: [${err.name}]- ${err} : ${code}`);
    const errors = [];
    const Status = 'Failure';
    if (err instanceof MicroserviceError) {
      const message = err.message || getErrorMessage(code);
      errors.push({ code, message });
    } else if (err instanceof RequestValidationError) {
      const { message } = err;
      errors.push({ code, message: JSON.parse(message) });
    } else {
      const message = getErrorMessage(code) || err.message;
      errors.push({ code, message });
    }
    res.status(status || 422);
    // res.json({ Status, error });
    res.locals.unformattedErrors = err.message;
    res.locals.errors = errors;
    next();
  };

  /**
 * Fallback error handler
 */
  const handleAppError = (err, req, res, next) => {
    console.error(`d91cd733-566f-4264-9f30-f9a78fa12f2c : Error: [${err.code}]- ${err}`);
    const code = errorConfigs.ErrorCodes.auth.SYSTEM_ERROR;
    const message = getErrorMessage(code);
    const errors = [
      {
        code,
        message,
      },
    ];
    res.status(422);
    // res.json({ Status: 'Failure', errors });
    res.locals.errors = errors;
    next();;
  };
  return [handleError, handleAppError];
};
