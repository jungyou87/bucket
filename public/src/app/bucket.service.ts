import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class BucketService {

  constructor(private _http: Http) { }

  index(){
    return this._http.get('/buckets/index').map(data => data.json()).toPromise()
  }

  create(bucket) {
    return this._http.post('/buckets/create', bucket).map(data => data.json()).toPromise()
  }

  update(id, bucket){
    return this._http.put(`/buckets/${id}`, bucket).map(data => data.json()).toPromise()
  }
}
