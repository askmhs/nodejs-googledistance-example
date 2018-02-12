import SuccessResponse from './../responses/SuccessResponse';
import BadRequestResponse from './../responses/BadRequestResponse';
import {DistanceController} from './../controllers/DistanceController';
import InternalServerErrorResponse from './../responses/InternalServerErrorResponse';

module.exports = (server) => {

	const mode = ['bycicling', 'walking', 'driving'];

	server.post('/location', (req, res) => {
		const isValid = (typeof req.body.origin === 'string' && typeof req.body.destination === 'string');
		if (!isValid) BadRequestResponse(res, "Invalid data!");
		if (mode[req.body.mode] !== undefined) req.body.mode = 'driving';

		new DistanceController(req.body.origin, req.body.destination, req.body.mode).get().then(result => {
			SuccessResponse(res, 'Successfully get distance data!', result);
		}).catch(errResult => {
			InternalServerErrorResponse(res, errResult.message);
		});
	});

	server.post('/coordinates', (req, res) => {
		const isValid = (typeof req.body.origin === 'object' && typeof req.body.destination === 'object');
		if (!isValid) BadRequestResponse(res, "Invalid data!");
		if (mode[req.body.mode] !== undefined) req.body.mode = 'driving';

		const origin = `${req.body.origin[0]}, ${req.body.origin[1]}`;
		const destination = `${req.body.destination[0]}, ${req.body.destination[1]}`;
		new DistanceController(origin, destination, req.body.mode).get().then(result => {
			SuccessResponse(res, 'Successfully get distance data!', result);
		}).catch(errResult => {
			InternalServerErrorResponse(res, errResult.message);
		});
	});
};