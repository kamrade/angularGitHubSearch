import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
	private username: string;
	private client_id = '9f4c58bb346739885898';
	private client_secret = 'fa8fcada211ff1c14b3eb89919c781c608c5606f';

	constructor(private _http: Http) {
		console.log('Github services ready');
		this.username = 'kamrade';
	}

	getUser() {
		return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
			.map(res => res.json());
	}

}
