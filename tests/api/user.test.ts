import * as chai from "chai";
import chaiHttp = require("chai-http");
chai.use(chaiHttp);
import { expect, request } from "chai";

require("dotenv").config();

const HOST = `${process.env.HOST}${process.env.API_VERSION}`;
/**
 * dox for chai-http https://www.chaijs.com/plugins/chai-http/
 */
describe("User endpoints", () => {
  it('should check if endpoint "/users" get data', function (done) {
    request(HOST)
      .get("/users")
      .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
});
