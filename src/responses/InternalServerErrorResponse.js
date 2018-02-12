export default(res, message, code = 5) => {
	res.status(500);
	res.json({
		success: true,
		error_code: code,
		message: message,
		data: null
	});
};