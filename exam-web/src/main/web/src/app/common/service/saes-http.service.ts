import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class SaesHttp {
  public server;
  public http;

  constructor(Http: HttpClient) {
    this.http = Http;
    this.server = 'http://localhost:9999/';
  }

  public get(url, params?: Object, callBack?: Function) {
    let httpParams = new HttpParams();
    if (params) {
      for (const key in params) {
        if (params[key] === false || params[key]) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }
    this.http.get(this.server + url, {params: httpParams})
      .subscribe(res => {
        callBack(res);
      });
  }

  public post(url, data?: Object, callBack?: Function, options?: Object) {
    this.http.post(this.server + url, data, options)
      .subscribe(res => {
        callBack(res);
      });
  }

  public put(url, data?: Object, callBack?: Function, options?: Object) {
    this.http.put(this.server + url, data, options)
      .subscribe(res => {
        callBack(res);
      });
  }

  public delete(url, params?: Object, callBack?: Function) {
    let httpParams = new HttpParams();
    if (params) {
      for (const key in params) {
        if (params[key]) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }
    this.http.delete(this.server + url, {params: httpParams})
      .subscribe(res => {
        callBack(res);
      });
  }
}
