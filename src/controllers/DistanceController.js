import distance from 'google-distance';

export class DistanceController {

	constructor(origin, destination, mode = 'driving') {
		distance.apiKey = 'AIzaSyAQbw3VU6bks16h_GwHGroVQf2r82JZvxI';

		this._mode = mode;
		this._origin = origin;
		this._destination = destination;
	}

	get() {
		return new Promise((resolve, reject) => {
			distance.get({
				mode: this._mode,
				origin: this._origin,
				destination: this._destination,
			}, (error, data) => {
				if (error) reject(error);

				resolve(data);
			});
		});
	}
}