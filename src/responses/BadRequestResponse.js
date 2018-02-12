export default(res, message, code = 3) => {
	res.status(400);
	res.json({
		success: true,
		error_code: code,
		message: message,
		data: null
	});
};